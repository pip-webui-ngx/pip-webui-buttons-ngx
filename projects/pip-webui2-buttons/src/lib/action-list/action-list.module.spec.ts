import { PipActionListModule } from './action-list.module';

describe('PipActionListModule', () => {
  let actionListModule: PipActionListModule;

  beforeEach(() => {
    actionListModule = new PipActionListModule();
  });

  it('should create an instance', () => {
    expect(actionListModule).toBeTruthy();
  });
});
