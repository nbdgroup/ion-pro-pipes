import { Pipe } from '@angular/core';
export class TailPipe {
    transform(input, num = 0) {
        return Array.isArray(input) ? input.slice(num) : input;
    }
}
TailPipe.decorators = [
    { type: Pipe, args: [{ name: 'tail' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9uZy1waXBlcy9waXBlcy9hcnJheS90YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR3BELE1BQU0sT0FBTyxRQUFRO0lBSW5CLFNBQVMsQ0FBQyxLQUFVLEVBQUUsTUFBYyxDQUFDO1FBQ25DLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ3pELENBQUM7OztZQVBGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICd0YWlsJyB9KVxyXG5leHBvcnQgY2xhc3MgVGFpbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0oaW5wdXQ6IGFueVtdLCBudW0/OiBudW1iZXIpOiBhbnlbXTtcclxuICB0cmFuc2Zvcm08VD4oaW5wdXQ6IFQsIG51bT86IG51bWJlcik6IFQ7XHJcblxyXG4gIHRyYW5zZm9ybShpbnB1dDogYW55LCBudW06IG51bWJlciA9IDApOiBhbnkge1xyXG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoaW5wdXQpID8gaW5wdXQuc2xpY2UobnVtKSA6IGlucHV0O1xyXG4gIH1cclxufVxyXG4iXX0=