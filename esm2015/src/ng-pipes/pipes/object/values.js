import { Pipe } from '@angular/core';
import { isObject } from '../helpers/helpers';
export class ValuesPipe {
    transform(obj) {
        if (Array.isArray(obj) || !isObject(obj)) {
            return obj;
        }
        return Object.keys(obj).map(k => obj[k]);
    }
}
ValuesPipe.decorators = [
    { type: Pipe, args: [{ name: 'values' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL25nLXBpcGVzL3BpcGVzL29iamVjdC92YWx1ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRzlDLE1BQU0sT0FBTyxVQUFVO0lBQ3JCLFNBQVMsQ0FBQyxHQUFRO1FBQ2hCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN4QyxPQUFPLEdBQUcsQ0FBQztTQUNaO1FBRUQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7OztZQVJGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi4vaGVscGVycy9oZWxwZXJzJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ3ZhbHVlcycgfSlcclxuZXhwb3J0IGNsYXNzIFZhbHVlc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0ob2JqOiBhbnkpOiBhbnlbXSB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopIHx8ICFpc09iamVjdChvYmopKSB7XHJcbiAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubWFwKGsgPT4gb2JqW2tdKTtcclxuICB9XHJcbn1cclxuIl19