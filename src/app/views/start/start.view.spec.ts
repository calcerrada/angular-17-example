import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StartView } from './start.view';

describe('StartView', () => {
  let component: StartView;
  let fixture: ComponentFixture<StartView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartView],
    }).compileComponents();

    fixture = TestBed.createComponent(StartView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
