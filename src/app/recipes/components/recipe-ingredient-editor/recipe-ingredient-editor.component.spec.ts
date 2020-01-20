import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeIngredientEditorComponent } from './recipe-ingredient-editor.component';

describe('RecipeIngredientEditorComponent', () => {
  let component: RecipeIngredientEditorComponent;
  let fixture: ComponentFixture<RecipeIngredientEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeIngredientEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeIngredientEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
