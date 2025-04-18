import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@heroui/modal';
import { Form } from '@heroui/form';
import { Input } from '@heroui/input';
import { Button } from '@heroui/button';

interface EditModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onSubmit: () => void;
  formData: {
    title?: string;
    likes?: number;
    imgUrl?: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      title?: string;
      likes?: number;
      imgUrl?: string;
    }>
  >;
  errors: Record<string, string>;
  handleCloseModal: () => void;
}

export default function EditModal({
  isOpen,
  onOpenChange,
  onSubmit,
  formData,
  setFormData,
  errors,
  handleCloseModal,
}: EditModalProps) {
  return (
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
            <Button variant="light" onPress={handleCloseModal}>
              Close
            </Button>
            <Button color="primary" type="submit" onPress={onSubmit}>
              Apply
            </Button>
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
  );
}
