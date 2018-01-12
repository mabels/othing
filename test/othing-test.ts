import { assert } from 'chai';
import { Othing, Othingy, objectId, IsOthing, IfOthing, ObjectId } from '../lib/othing';

class MyTestExtends extends Othingy {
}

@IsOthing()
class MyTestDecorate {
}

@IsOthing('jo')
class MyTestDecoratePrefix {
}

describe('rxme', () => {

  it('decorator Binding', () => {
    for (let i = 0; i < 10; i++) {
      const j = new MyTestDecorate();
      const x = ObjectId(j).split(':');
      assert.equal(parseInt(x[1], 16), objectId);
      assert.equal(x[0], 'MyTestDecorate');
      // assert.equal(parseInt(ObjectId(j), 16), objectId);
    }
  });

  it('MyTestDecoratePrefix Binding', () => {
    for (let i = 0; i < 10; i++) {
      const j = new MyTestDecoratePrefix();
      const x = ObjectId(j).split(':');
      assert.equal(parseInt(x[1], 16), objectId);
      assert.equal(x[0], 'jo');
    }
  });

  it('class Binding', () => {
    for (let i = 0; i < 10; i++) {
      const j = new MyTestExtends();
      assert.equal(parseInt(j.objectId, 16), objectId);
    }
  });

  it('function Binding', () => {
    for (let i = 0; i < 10; i++) {
      const j = Othing();
      assert.equal(parseInt(j, 16), objectId);
    }
  });

  it('function with prefix Binding', () => {
    for (let i = 0; i < 10; i++) {
      const j = Othing('Hello');
      assert.ok(j.startsWith('Hello'));
    }
  });

});
