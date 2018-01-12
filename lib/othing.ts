
export let objectId = 0x10000000 + ~~(Math.random() * 0xFFFFFFFF);

export interface IfOthing {
  readonly objectId: string;
}

// export function IsOthing<T extends {new(...args: any[]): {} }, P = string>(constructor: T, u?: P): any {
  // return class extends constructor {
      // public readonly objectId: string = Othing(constructor.name);
  // };
// }

export function IsOthing(name?: string): any {
  // const othing = Othing(constructor.name);
  return function _IsOthing<T extends {new(...args: any[]): {} }, P = string>(constructor: T, u?: P): any {
    return class extends constructor {
        public readonly objectId: string = Othing(name || constructor.name);
    };
  };
}

export class Othingy implements IfOthing {
  public readonly objectId: string;
  constructor(prefix: string = '') {
    this.objectId = Othing(prefix);
  }
}

export function Othing(prefix: string = ''): string {
  const s = (++objectId).toString(16);
  if (prefix.length) {
    return `${prefix}:${s}`;
  }
  return s;
}

export function ObjectId(oid: any): string {
  return (oid as IfOthing).objectId;
}

export default Othing;
