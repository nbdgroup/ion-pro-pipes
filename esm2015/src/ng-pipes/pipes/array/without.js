import { Pipe } from '@angular/core';
export class WithoutPipe {
    transform(input, args = []) {
        return Array.isArray(input)
            ? // tslint:disable-next-line:no-bitwise
                input.filter(e => !~args.indexOf(e))
            : input;
    }
}
WithoutPipe.decorators = [
    { type: Pipe, args: [{ name: 'without' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aG91dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9uZy1waXBlcy9waXBlcy9hcnJheS93aXRob3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR3BELE1BQU0sT0FBTyxXQUFXO0lBSXRCLFNBQVMsQ0FBQyxLQUFVLEVBQUUsT0FBYyxFQUFFO1FBQ3BDLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDekIsQ0FBQyxDQUFDLHNDQUFzQztnQkFDdEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDWixDQUFDOzs7WUFWRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnd2l0aG91dCcgfSlcclxuZXhwb3J0IGNsYXNzIFdpdGhvdXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKGlucHV0OiBhbnlbXSwgYXJncz86IGFueVtdKTogYW55W107XHJcbiAgdHJhbnNmb3JtKGlucHV0OiBhbnksIGFyZ3M/OiBhbnlbXSk6IGFueTtcclxuXHJcbiAgdHJhbnNmb3JtKGlucHV0OiBhbnksIGFyZ3M6IGFueVtdID0gW10pOiBhbnlbXSB7XHJcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShpbnB1dClcclxuICAgICAgPyAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxyXG4gICAgICAgIGlucHV0LmZpbHRlcihlID0+ICF+YXJncy5pbmRleE9mKGUpKVxyXG4gICAgICA6IGlucHV0O1xyXG4gIH1cclxufVxyXG4iXX0=