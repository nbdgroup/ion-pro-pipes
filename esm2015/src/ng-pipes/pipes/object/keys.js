import { Pipe } from '@angular/core';
import { isObject } from '../helpers/helpers';
export class KeysPipe {
    transform(obj) {
        if (Array.isArray(obj) || !isObject(obj)) {
            return obj;
        }
        return Object.keys(obj);
    }
}
KeysPipe.decorators = [
    { type: Pipe, args: [{ name: 'keys' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9uZy1waXBlcy9waXBlcy9vYmplY3Qva2V5cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHOUMsTUFBTSxPQUFPLFFBQVE7SUFDbkIsU0FBUyxDQUFDLEdBQVE7UUFDaEIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3hDLE9BQU8sR0FBRyxDQUFDO1NBQ1o7UUFFRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7O1lBUkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuLi9oZWxwZXJzL2hlbHBlcnMnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAna2V5cycgfSlcclxuZXhwb3J0IGNsYXNzIEtleXNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKG9iajogYW55KTogYW55W10ge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSB8fCAhaXNPYmplY3Qob2JqKSkge1xyXG4gICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopO1xyXG4gIH1cclxufVxyXG4iXX0=