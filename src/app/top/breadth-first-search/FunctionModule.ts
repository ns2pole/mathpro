export const isRightSide : (map : Array<Array<any>>, row : number, column :number) => boolean
= (map, row, column) => column == map[row].length - 1;
export const isLeftSide : (map : Array<Array<any>>, row : number, column :number) => boolean
= (map, row, column) => column == 0;
export const isTopSide : (map : Array<Array<any>>, row : number, column :number) => boolean
= (map, row, column) => row == 0;
export const isBottomSide : (map : Array<Array<any>>, row : number, column :number) => boolean
= (map, row, column) => row == map.length - 1;
export const isInside : (map : Array<Array<any>>, row : number, column :number) => boolean 
= (map, row, column) => !isRightSide(map, row, column) && !isLeftSide(map, row, column) && !isTopSide(map, row, column) && !isBottomSide(map, row, column);