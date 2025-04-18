import { useContext, useState } from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from '@heroui/table';

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@heroui/modal';

import { Form } from '@heroui/form';
import { Input } from '@heroui/input';
import { Button } from '@heroui/button';
import { MemeContext } from '@/features/meme/MemeContext';
import DefaultLayout from '@/layouts/default';
import { Meme } from '@/utils/types/meme';
import { updateMemesInStorage } from '@/features/meme/memeInStorage';

interface FormData {
  title?: string;
  likes?: number;
  imgUrl?: string;
}

export default function TablePage() {
  const { memeList, setMemeList } = useContext(MemeContext);

  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [selectedMeme, setSelectedMeme] = useState<Meme | null>(null);
  const [formData, setFormData] = useState<FormData>({});
  const [errors, setErrors] = useState({});

  //#region modal
  function handleOpenModal(id: Meme['id']) {
    const currentMeme = memeList.find((item) => item.id === id) || null;
    setSelectedMeme(currentMeme);

    setFormData({
      title: currentMeme?.title || '',
      likes: currentMeme?.likes || 0,
      imgUrl: currentMeme?.imgURL || '',
    });

    onOpen();
  }

  function handleCloseModal() {
    setSelectedMeme(null);
    onClose();
  }
  //#endregion

  //#region form
  function getUrlError(value: string | undefined) {
    const regex = /^(http:\/\/|https:\/\/).+$/;

    if (String(value).length < 8) {
      return 'URL must be 8 characters or more';
    }
    if ((String(value).match(regex) || []).length < 1) {
      return 'Correct URL should start with http:// or https://';
    }
  }

  function getLikesError(value: number | undefined) {
    if (value === undefined || value < 1 || value > 99) {
      return 'Number of likes should be between 1 and 99';
    }
  }

  function onSubmit() {
    const newErrors: { imgUrl?: string; likes?: string; title?: string } = {};

    const urlError = getUrlError(formData.imgUrl);
    const likesError = getLikesError(formData.likes);

    if (urlError) {
      newErrors.imgUrl = urlError;
    }
    if (likesError) {
      newErrors.likes = likesError;
    }
    if (formData.title?.trim().length === 0) {
      // prevents setting space as title
      newErrors.title = 'Title can not be blank';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

      return;
    }

    const newMemes = memeList.map((item) =>
      item.id === selectedMeme?.id
        ? {
            ...item,
            title: formData.title || '',
            likes: formData.likes || 0,
            imgURL: formData.imgUrl || '',
          }
        : item
    );

    updateMemesInStorage(setMemeList, newMemes);
    setErrors({});
    onClose();
  }
  //#endregion

  return (
    <DefaultLayout>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">
              Want to change this meme properties?
            </ModalHeader>
            <ModalBody>
              <Form
                className="w-full justify-center items-center space-y-4"
                validationErrors={errors}
                onSubmit={onSubmit}
              >
                <div className="flex flex-col gap-4 max-w-md">
                  <Input
                    isRequired
                    errorMessage={({ validationDetails }) => {
                      if (
                        validationDetails.valueMissing ||
                        validationDetails.badInput
                      ) {
                        return 'Title cannot be blank';
                      }
                    }}
                    label="Title"
                    labelPlacement="outside"
                    name="title"
                    placeholder="Enter new title"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                  />

                  <Input
                    isRequired
                    label="Likes"
                    labelPlacement="outside"
                    name="likes"
                    placeholder="Enter number of likes"
                    type="number"
                    value={String(formData.likes)}
                    onChange={(e) =>
                      setFormData({ ...formData, likes: +e.target.value })
                    }
                  />

                  <Input
                    isRequired
                    label="Image URL"
                    labelPlacement="outside"
                    name="imgURL"
                    placeholder="Enter image URL"
                    type="text"
                    value={formData.imgUrl}
                    onChange={(e) =>
                      setFormData({ ...formData, imgUrl: e.target.value })
                    }
                  />
                </div>
              </Form>
            </ModalBody>
            {Object.keys(errors).length > 0 && (
              <div className="text-red-500 text-sm mt-2 px-6">
                {Object.values(errors).map((error, index) => (
                  <p key={index}>{String(error)}</p>
                ))}
              </div>
            )}
            <ModalFooter>
              <Button color="danger" variant="light" onPress={handleCloseModal}>
                Close
              </Button>
              <Button color="primary" type="submit" onPress={onSubmit}>
                Apply
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>

      <section className="flex flex-col items-center justify-center">
        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>TITLE</TableColumn>
            <TableColumn>LIKES</TableColumn>
            <TableColumn className="text-center">ACTIONS</TableColumn>
          </TableHeader>

          <TableBody>
            {memeList.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.likes}</TableCell>
                <TableCell className="flex justify-center">
                  <Button
                    color="primary"
                    onPress={() => handleOpenModal(item.id)}
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </DefaultLayout>
  );
}
