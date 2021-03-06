import { NgModule } from '@angular/core';
import { IsDefinedPipe } from './is-defined';
import { IsNullPipe } from './is-null';
import { IsUndefinedPipe } from './is-undefined';
import { IsStringPipe } from './is-string';
import { IsFunctionPipe } from './is-function';
import { IsNumberPipe } from './is-number';
import { IsArrayPipe } from './is-array';
import { IsObjectPipe } from './is-object';
import { IsGreaterEqualThanPipe } from './is-greater-equal-than';
import { IsGreaterThanPipe } from './is-greater-than';
import { IsLessEqualThanPipe } from './is-less-equal-than';
import { IsEqualToPipe } from './is-equal-to';
import { IsNotEqualToPipe } from './is-not-equal-to';
import { IsIdenticalToPipe } from './is-identical-to';
import { IsNotIdenticalToPipe } from './is-not-identical-to';
import { IsLessThanPipe } from './is-less-than';
export const BOOLEAN_PIPES = [
    IsDefinedPipe,
    IsNullPipe,
    IsUndefinedPipe,
    IsStringPipe,
    IsFunctionPipe,
    IsNumberPipe,
    IsArrayPipe,
    IsObjectPipe,
    IsGreaterEqualThanPipe,
    IsGreaterThanPipe,
    IsLessEqualThanPipe,
    IsLessEqualThanPipe,
    IsEqualToPipe,
    IsNotEqualToPipe,
    IsIdenticalToPipe,
    IsNotIdenticalToPipe,
    IsLessThanPipe,
];
export class NgBooleanPipesModule {
}
NgBooleanPipesModule.decorators = [
    { type: NgModule, args: [{
                declarations: BOOLEAN_PIPES,
                imports: [],
                exports: BOOLEAN_PIPES,
            },] }
];
export { IsDefinedPipe } from './is-defined';
export { IsNullPipe } from './is-null';
export { IsUndefinedPipe } from './is-undefined';
export { IsStringPipe } from './is-string';
export { IsFunctionPipe } from './is-function';
export { IsNumberPipe } from './is-number';
export { IsArrayPipe } from './is-array';
export { IsObjectPipe } from './is-object';
export { IsGreaterEqualThanPipe } from './is-greater-equal-than';
export { IsGreaterThanPipe } from './is-greater-than';
export { IsLessEqualThanPipe } from './is-less-equal-than';
export { IsEqualToPipe } from './is-equal-to';
export { IsNotEqualToPipe } from './is-not-equal-to';
export { IsIdenticalToPipe } from './is-identical-to';
export { IsNotIdenticalToPipe } from './is-not-identical-to';
export { IsLessThanPipe } from './is-less-than';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbmctcGlwZXMvcGlwZXMvYm9vbGVhbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUN2QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWhELE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRztJQUMzQixhQUFhO0lBQ2IsVUFBVTtJQUNWLGVBQWU7SUFDZixZQUFZO0lBQ1osY0FBYztJQUNkLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsY0FBYztDQUNmLENBQUM7QUFPRixNQUFNLE9BQU8sb0JBQW9COzs7WUFMaEMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxhQUFhO2dCQUMzQixPQUFPLEVBQUUsRUFBRTtnQkFDWCxPQUFPLEVBQUUsYUFBYTthQUN2Qjs7QUFHRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzdDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDdkMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMzQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElzRGVmaW5lZFBpcGUgfSBmcm9tICcuL2lzLWRlZmluZWQnO1xyXG5pbXBvcnQgeyBJc051bGxQaXBlIH0gZnJvbSAnLi9pcy1udWxsJztcclxuaW1wb3J0IHsgSXNVbmRlZmluZWRQaXBlIH0gZnJvbSAnLi9pcy11bmRlZmluZWQnO1xyXG5pbXBvcnQgeyBJc1N0cmluZ1BpcGUgfSBmcm9tICcuL2lzLXN0cmluZyc7XHJcbmltcG9ydCB7IElzRnVuY3Rpb25QaXBlIH0gZnJvbSAnLi9pcy1mdW5jdGlvbic7XHJcbmltcG9ydCB7IElzTnVtYmVyUGlwZSB9IGZyb20gJy4vaXMtbnVtYmVyJztcclxuaW1wb3J0IHsgSXNBcnJheVBpcGUgfSBmcm9tICcuL2lzLWFycmF5JztcclxuaW1wb3J0IHsgSXNPYmplY3RQaXBlIH0gZnJvbSAnLi9pcy1vYmplY3QnO1xyXG5pbXBvcnQgeyBJc0dyZWF0ZXJFcXVhbFRoYW5QaXBlIH0gZnJvbSAnLi9pcy1ncmVhdGVyLWVxdWFsLXRoYW4nO1xyXG5pbXBvcnQgeyBJc0dyZWF0ZXJUaGFuUGlwZSB9IGZyb20gJy4vaXMtZ3JlYXRlci10aGFuJztcclxuaW1wb3J0IHsgSXNMZXNzRXF1YWxUaGFuUGlwZSB9IGZyb20gJy4vaXMtbGVzcy1lcXVhbC10aGFuJztcclxuaW1wb3J0IHsgSXNFcXVhbFRvUGlwZSB9IGZyb20gJy4vaXMtZXF1YWwtdG8nO1xyXG5pbXBvcnQgeyBJc05vdEVxdWFsVG9QaXBlIH0gZnJvbSAnLi9pcy1ub3QtZXF1YWwtdG8nO1xyXG5pbXBvcnQgeyBJc0lkZW50aWNhbFRvUGlwZSB9IGZyb20gJy4vaXMtaWRlbnRpY2FsLXRvJztcclxuaW1wb3J0IHsgSXNOb3RJZGVudGljYWxUb1BpcGUgfSBmcm9tICcuL2lzLW5vdC1pZGVudGljYWwtdG8nO1xyXG5pbXBvcnQgeyBJc0xlc3NUaGFuUGlwZSB9IGZyb20gJy4vaXMtbGVzcy10aGFuJztcclxuXHJcbmV4cG9ydCBjb25zdCBCT09MRUFOX1BJUEVTID0gW1xyXG4gIElzRGVmaW5lZFBpcGUsXHJcbiAgSXNOdWxsUGlwZSxcclxuICBJc1VuZGVmaW5lZFBpcGUsXHJcbiAgSXNTdHJpbmdQaXBlLFxyXG4gIElzRnVuY3Rpb25QaXBlLFxyXG4gIElzTnVtYmVyUGlwZSxcclxuICBJc0FycmF5UGlwZSxcclxuICBJc09iamVjdFBpcGUsXHJcbiAgSXNHcmVhdGVyRXF1YWxUaGFuUGlwZSxcclxuICBJc0dyZWF0ZXJUaGFuUGlwZSxcclxuICBJc0xlc3NFcXVhbFRoYW5QaXBlLFxyXG4gIElzTGVzc0VxdWFsVGhhblBpcGUsXHJcbiAgSXNFcXVhbFRvUGlwZSxcclxuICBJc05vdEVxdWFsVG9QaXBlLFxyXG4gIElzSWRlbnRpY2FsVG9QaXBlLFxyXG4gIElzTm90SWRlbnRpY2FsVG9QaXBlLFxyXG4gIElzTGVzc1RoYW5QaXBlLFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IEJPT0xFQU5fUElQRVMsXHJcbiAgaW1wb3J0czogW10sXHJcbiAgZXhwb3J0czogQk9PTEVBTl9QSVBFUyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE5nQm9vbGVhblBpcGVzTW9kdWxlIHt9XHJcblxyXG5leHBvcnQgeyBJc0RlZmluZWRQaXBlIH0gZnJvbSAnLi9pcy1kZWZpbmVkJztcclxuZXhwb3J0IHsgSXNOdWxsUGlwZSB9IGZyb20gJy4vaXMtbnVsbCc7XHJcbmV4cG9ydCB7IElzVW5kZWZpbmVkUGlwZSB9IGZyb20gJy4vaXMtdW5kZWZpbmVkJztcclxuZXhwb3J0IHsgSXNTdHJpbmdQaXBlIH0gZnJvbSAnLi9pcy1zdHJpbmcnO1xyXG5leHBvcnQgeyBJc0Z1bmN0aW9uUGlwZSB9IGZyb20gJy4vaXMtZnVuY3Rpb24nO1xyXG5leHBvcnQgeyBJc051bWJlclBpcGUgfSBmcm9tICcuL2lzLW51bWJlcic7XHJcbmV4cG9ydCB7IElzQXJyYXlQaXBlIH0gZnJvbSAnLi9pcy1hcnJheSc7XHJcbmV4cG9ydCB7IElzT2JqZWN0UGlwZSB9IGZyb20gJy4vaXMtb2JqZWN0JztcclxuZXhwb3J0IHsgSXNHcmVhdGVyRXF1YWxUaGFuUGlwZSB9IGZyb20gJy4vaXMtZ3JlYXRlci1lcXVhbC10aGFuJztcclxuZXhwb3J0IHsgSXNHcmVhdGVyVGhhblBpcGUgfSBmcm9tICcuL2lzLWdyZWF0ZXItdGhhbic7XHJcbmV4cG9ydCB7IElzTGVzc0VxdWFsVGhhblBpcGUgfSBmcm9tICcuL2lzLWxlc3MtZXF1YWwtdGhhbic7XHJcbmV4cG9ydCB7IElzRXF1YWxUb1BpcGUgfSBmcm9tICcuL2lzLWVxdWFsLXRvJztcclxuZXhwb3J0IHsgSXNOb3RFcXVhbFRvUGlwZSB9IGZyb20gJy4vaXMtbm90LWVxdWFsLXRvJztcclxuZXhwb3J0IHsgSXNJZGVudGljYWxUb1BpcGUgfSBmcm9tICcuL2lzLWlkZW50aWNhbC10byc7XHJcbmV4cG9ydCB7IElzTm90SWRlbnRpY2FsVG9QaXBlIH0gZnJvbSAnLi9pcy1ub3QtaWRlbnRpY2FsLXRvJztcclxuZXhwb3J0IHsgSXNMZXNzVGhhblBpcGUgfSBmcm9tICcuL2lzLWxlc3MtdGhhbic7XHJcbiJdfQ==