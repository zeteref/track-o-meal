
class Column {
  constructor(public field: string, public header: string) {}
}

const columns = [
    new Column('name', 'Name'),
    new Column('calories', 'Calories'),
    new Column('protein', 'Protein'),
    new Column('veg_protein', 'Veg. P.'),
    new Column('carbo', 'Carbo'),
    new Column('sugar', 'Sugar'),
    new Column('fats', 'Fats'),
];

export function get_columns(): Column[] {
  return columns;
}

export class Ingredient {
    id: number;
    name: string;
    calories: number;
    sugar: number;
    vet_protein: number;
    protein: number;
    carbo: number;
    fats: number;
}
