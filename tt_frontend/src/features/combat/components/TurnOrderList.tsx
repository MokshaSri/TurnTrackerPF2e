import {
  Table,
  TableHeader,
  TableBody,
  Column,
  Row,
  Cell,
} from 'react-aria-components';
import type { Combatant } from '../types/combat';
import { getCombatantDisplayName, getCombatantActorType } from './CombatantRow';

type Props = { combatants: Combatant[] };

export function TurnOrderList({ combatants }: Props) {
  return (
    <Table
      aria-label="Turn order"
      className="w-full border-collapse"
    >
      <TableHeader>
        <Column id="order" className="border-b border-gray-600 bg-gray-800 px-4 py-2 text-left font-medium">
          Order
        </Column>
        <Column id="name" className="border-b border-gray-600 bg-gray-800 px-4 py-2 text-left font-medium">
          Name
        </Column>
        <Column id="type" className="border-b border-gray-600 bg-gray-800 px-4 py-2 text-left font-medium">
          Type
        </Column>
      </TableHeader>
      <TableBody
        items={combatants}
        className="[&_tr]:border-b [&_tr]:border-gray-700 [&_tr:hover]:bg-gray-800/50"
      >
        {(combatant) => (
          <Row className="border-b border-gray-700 hover:bg-gray-800/50">
            <Cell className="px-4 py-2">{combatant.order_index + 1}</Cell>
            <Cell className="px-4 py-2 font-medium">
              {getCombatantDisplayName(combatant)}
            </Cell>
            <Cell className="px-4 py-2 text-gray-400">
              {getCombatantActorType(combatant)}
            </Cell>
          </Row>
        )}
      </TableBody>
    </Table>
  );
}
