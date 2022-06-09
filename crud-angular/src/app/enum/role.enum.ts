export enum Role {
  SUPPORT = 1,
  TANK = 2,
  DPS = 3,
}

export const RoleLabel = new Map<number, string>([
  [Role.SUPPORT, 'Support'],
  [Role.TANK, 'Tank'],
  [Role.DPS, 'Damage Dealer']
]);
