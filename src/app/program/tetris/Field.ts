
class Field {
    public map: number[][];

    constructor() {
        this.map = [
            [1,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,1,1],
        ];
    }

    public getWidth(): number {
        return this.map[0].length;
    }

    public getDepth(): number {
        return this.map.length;
    }

    public getBlocks(): Block[] {
        const blocks: Block[] = [];
        for (let y = 0; y < this.map.length; y++) {
            for (let x = 0; x < this.map[y].length; x++) {
                if (this.map[y][x] === FIXED_BLOCK_CODE) {
                    blocks.push(new Block(new Vec2D(x, y)));
                }
            }
        }
        return blocks;
    }

    public getWalls(): Wall[] {
        const walls: Wall[] = [];
        for (let y = 0; y < this.map.length; y++) {
            for (let x = 0; x < this.map[y].length; x++) {
                if (this.map[y][x] === WALL_CODE) {
                    walls.push(new Wall(new Vec2D(x, y)));
                }
            }
        }
        return walls;
    }

    public draw(context2d: CanvasRenderingContext2D): void {
        const walls = this.getWalls();
        for (let i = 0; i < walls.length; i++) {
            walls[i].draw(context2d);
        }

        const blocks = this.getBlocks();
        for (let i = 0; i < blocks.length; i++) {
            blocks[i].draw(context2d);
        }
    }

    public place(fourPiece: FourPiece): void {
        for (let i = 0; i < fourPiece.blocks.length; i++) {
            this.map[fourPiece.blocks[i].position.y][fourPiece.blocks[i].position.x] = FIXED_BLOCK_CODE;
        }
    }
}
