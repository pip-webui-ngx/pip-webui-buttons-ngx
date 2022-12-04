import { PipButtonToggleGroupModule } from './button-toggle-group.module';

describe('PipButtonToggleGroupModule', () => {
  let buttonToggleGroupModule: PipButtonToggleGroupModule;

  beforeEach(() => {
    buttonToggleGroupModule = new PipButtonToggleGroupModule();
  });

  it('should create an instance', () => {
    expect(buttonToggleGroupModule).toBeTruthy();
  });
});
