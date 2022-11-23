import { ToggleButtonsExampleModule } from './toggle-buttons-example.module';

describe('ToggleButtonsExampleModule', () => {
  let toggleButtonsExampleModule: ToggleButtonsExampleModule;

  beforeEach(() => {
    toggleButtonsExampleModule = new ToggleButtonsExampleModule();
  });

  it('should create an instance', () => {
    expect(toggleButtonsExampleModule).toBeTruthy();
  });
});
