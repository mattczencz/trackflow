import { Button, Flex } from '@radix-ui/themes';
import Link from 'next/link';
import IssueStatusFilter from './IssueStatusFilter';

const IssueActions = () => {
  return (
    <Flex mb="6" justify="between">
      <IssueStatusFilter />
      <Button asChild>
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </Flex>
  );
};
export default IssueActions;