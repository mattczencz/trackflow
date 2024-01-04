import { ChevronLeftIcon, ChevronRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon } from '@radix-ui/react-icons';
import { Button, Flex, Text } from '@radix-ui/themes';

interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination = ({ itemCount, pageSize, currentPage }: Props) => {
  const pageCount = Math.ceil(itemCount / pageSize);

  if (pageCount <= 1) return null;

  return (
    <Flex align="center" gap="4">
      <Button variant="ghost" disabled={currentPage === 1}>
        <DoubleArrowLeftIcon />
      </Button>
      <Button variant="ghost" disabled={currentPage === 1}>
        <ChevronLeftIcon />
      </Button>
      <Text size="2">Page {currentPage} of {pageCount}</Text>
      <Button variant="ghost" disabled={currentPage === pageCount}>
        <ChevronRightIcon />
      </Button>
      <Button variant="ghost" disabled={currentPage === pageCount}>
        <DoubleArrowRightIcon />
      </Button>
    </Flex>
  );
};
export default Pagination;