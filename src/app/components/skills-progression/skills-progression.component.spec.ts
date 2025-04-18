import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsProgressionComponent } from './skills-progression.component';

describe('SkillsProgressionComponent', () => {
  let component: SkillsProgressionComponent;
  let fixture: ComponentFixture<SkillsProgressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsProgressionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsProgressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
