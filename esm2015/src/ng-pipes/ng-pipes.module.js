import { NgModule } from '@angular/core';
import { NgArrayPipesModule } from './pipes/array/index';
import { NgObjectPipesModule } from './pipes/object/index';
import { NgStringPipesModule } from './pipes/string/index';
import { NgMathPipesModule } from './pipes/math/index';
import { NgBooleanPipesModule } from './pipes/boolean/index';
import { NgDatePipesModule } from './pipes/date/index';
export class NgPipesModule {
}
NgPipesModule.decorators = [
    { type: NgModule, args: [{
                exports: [
                    NgArrayPipesModule,
                    NgStringPipesModule,
                    NgMathPipesModule,
                    NgBooleanPipesModule,
                    NgObjectPipesModule,
                    NgDatePipesModule,
                ],
            },] }
];
export * from './pipes/array/index';
export * from './pipes/object/index';
export * from './pipes/string/index';
export * from './pipes/math/index';
export * from './pipes/boolean/index';
export * from './pipes/date/index';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcGlwZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL25nLXBpcGVzL25nLXBpcGVzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBWXZELE1BQU0sT0FBTyxhQUFhOzs7WUFWekIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxrQkFBa0I7b0JBQ2xCLG1CQUFtQjtvQkFDbkIsaUJBQWlCO29CQUNqQixvQkFBb0I7b0JBQ3BCLG1CQUFtQjtvQkFDbkIsaUJBQWlCO2lCQUNsQjthQUNGOztBQUdELGNBQWMscUJBQXFCLENBQUM7QUFDcEMsY0FBYyxzQkFBc0IsQ0FBQztBQUNyQyxjQUFjLHNCQUFzQixDQUFDO0FBQ3JDLGNBQWMsb0JBQW9CLENBQUM7QUFDbkMsY0FBYyx1QkFBdUIsQ0FBQztBQUN0QyxjQUFjLG9CQUFvQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdBcnJheVBpcGVzTW9kdWxlIH0gZnJvbSAnLi9waXBlcy9hcnJheS9pbmRleCc7XHJcbmltcG9ydCB7IE5nT2JqZWN0UGlwZXNNb2R1bGUgfSBmcm9tICcuL3BpcGVzL29iamVjdC9pbmRleCc7XHJcbmltcG9ydCB7IE5nU3RyaW5nUGlwZXNNb2R1bGUgfSBmcm9tICcuL3BpcGVzL3N0cmluZy9pbmRleCc7XHJcbmltcG9ydCB7IE5nTWF0aFBpcGVzTW9kdWxlIH0gZnJvbSAnLi9waXBlcy9tYXRoL2luZGV4JztcclxuaW1wb3J0IHsgTmdCb29sZWFuUGlwZXNNb2R1bGUgfSBmcm9tICcuL3BpcGVzL2Jvb2xlYW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBOZ0RhdGVQaXBlc01vZHVsZSB9IGZyb20gJy4vcGlwZXMvZGF0ZS9pbmRleCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGV4cG9ydHM6IFtcclxuICAgIE5nQXJyYXlQaXBlc01vZHVsZSxcclxuICAgIE5nU3RyaW5nUGlwZXNNb2R1bGUsXHJcbiAgICBOZ01hdGhQaXBlc01vZHVsZSxcclxuICAgIE5nQm9vbGVhblBpcGVzTW9kdWxlLFxyXG4gICAgTmdPYmplY3RQaXBlc01vZHVsZSxcclxuICAgIE5nRGF0ZVBpcGVzTW9kdWxlLFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ1BpcGVzTW9kdWxlIHt9XHJcblxyXG5leHBvcnQgKiBmcm9tICcuL3BpcGVzL2FycmF5L2luZGV4JztcclxuZXhwb3J0ICogZnJvbSAnLi9waXBlcy9vYmplY3QvaW5kZXgnO1xyXG5leHBvcnQgKiBmcm9tICcuL3BpcGVzL3N0cmluZy9pbmRleCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcGlwZXMvbWF0aC9pbmRleCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcGlwZXMvYm9vbGVhbi9pbmRleCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcGlwZXMvZGF0ZS9pbmRleCc7XHJcbiJdfQ==