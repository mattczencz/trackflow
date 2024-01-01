import IssueStatusBadge from '@/app/components/IssueStatusBadge';
import TextLink from '@/app/components/TextLink';
import prisma from '@/prisma/client';
import { Table } from '@radix-ui/themes';
import delay from 'delay';
import Link from 'next/link';

const IssuesTable = async () => {
  const issues = await prisma.issue.findMany();

  await delay(2000);

  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className="hidden md:table-cell">Status</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className="hidden md:table-cell">Created</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {issues.map(issue => (
          <Table.Row key={issue.id}>
            <Table.Cell>
              <TextLink href={`/issues/${ issue.id }`}>
                {issue.title}
              </TextLink>
              <div className="block md:hidden">
                <IssueStatusBadge status={issue.status} />
              </div>
            </Table.Cell>
            <Table.Cell className="hidden md:table-cell">
              <IssueStatusBadge status={issue.status} />
            </Table.Cell>
            <Table.Cell className="hidden md:table-cell">{issue.createdAt.toDateString()}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};
export default IssuesTable;