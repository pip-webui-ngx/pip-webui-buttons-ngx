import { ActionListExampleModule } from './action-list-example.module';

describe('ActionListExampleModule', () => {
  let actionListExampleModule: ActionListExampleModule;

  beforeEach(() => {
    actionListExampleModule = new ActionListExampleModule();
  });

  it('should create an instance', () => {
    expect(actionListExampleModule).toBeTruthy();
  });
});
