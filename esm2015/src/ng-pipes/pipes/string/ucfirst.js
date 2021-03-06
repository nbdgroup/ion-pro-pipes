import { Pipe } from '@angular/core';
import { isString, ucFirst } from '../helpers/helpers';
export class UcFirstPipe {
    transform(text) {
        return isString(text) ? ucFirst(text) : text;
    }
}
UcFirstPipe.decorators = [
    { type: Pipe, args: [{ name: 'ucfirst' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWNmaXJzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9uZy1waXBlcy9waXBlcy9zdHJpbmcvdWNmaXJzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3ZELE1BQU0sT0FBTyxXQUFXO0lBSXRCLFNBQVMsQ0FBQyxJQUFTO1FBQ2pCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUMvQyxDQUFDOzs7WUFQRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc1N0cmluZywgdWNGaXJzdCB9IGZyb20gJy4uL2hlbHBlcnMvaGVscGVycyc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICd1Y2ZpcnN0JyB9KVxyXG5leHBvcnQgY2xhc3MgVWNGaXJzdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0oaW5wdXQ6IHN0cmluZyk6IHN0cmluZztcclxuICB0cmFuc2Zvcm0oaW5wdXQ6IGFueSk6IGFueTtcclxuXHJcbiAgdHJhbnNmb3JtKHRleHQ6IGFueSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gaXNTdHJpbmcodGV4dCkgPyB1Y0ZpcnN0KHRleHQpIDogdGV4dDtcclxuICB9XHJcbn1cclxuIl19