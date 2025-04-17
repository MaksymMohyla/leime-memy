import { useContext } from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from '@heroui/table';
import { Button } from '@heroui/button';
import { MemeContext } from '@/features/meme/MemeContext';
import DefaultLayout from '@/layouts/default';

export default function TablePage() {
  const { memeList } = useContext(MemeContext);

  return (
    <DefaultLayout>
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
                  <Button color="primary">Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </DefaultLayout>
  );
}
