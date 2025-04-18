import { useContext } from 'react';
import { MemeContext } from '@/features/meme/MemeContext';
import DefaultLayout from '@/layouts/default';
import { Card, CardBody, CardFooter } from '@heroui/card';
import { Image } from '@heroui/image';
import { Link } from '@heroui/link';

export default function ListPage() {
  const { memeList } = useContext(MemeContext);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
          {memeList.map((item, index) => (
            <Card key={index} shadow="sm">
              <CardBody className="overflow-visible p-0">
                <Image
                  alt={item.title}
                  className="w-full object-contain h-[260px]"
                  radius="lg"
                  shadow="sm"
                  src={item.imgURL}
                  width="100%"
                />
              </CardBody>
              <CardFooter className="text-small flex flex-col gap-4">
                <b>{item.title}</b>
                <p className="text-default-500">{`Likes: ${item.likes}`}</p>
                <Link href={item.imgURL} target="_blank">
                  Link to this meme
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
