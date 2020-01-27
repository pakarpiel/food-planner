import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeNameEditorComponent } from './recipe-name-editor.component';

describe('RecipeNameEditorComponent', () => {
  let component: RecipeNameEditorComponent;
  let fixture: ComponentFixture<RecipeNameEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeNameEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeNameEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
