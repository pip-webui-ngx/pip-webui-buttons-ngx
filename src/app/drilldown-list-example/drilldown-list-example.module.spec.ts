import { DrilldownListExampleModule } from './drilldown-list-example.module';

describe('DrilldownListExampleModule', () => {
  let drilldownListExampleModule: DrilldownListExampleModule;

  beforeEach(() => {
    drilldownListExampleModule = new DrilldownListExampleModule();
  });

  it('should create an instance', () => {
    expect(drilldownListExampleModule).toBeTruthy();
  });
});
