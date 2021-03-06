import { Pipe } from '@angular/core';
import { isString } from '../helpers/helpers';
export class ChunkPipe {
    transform(input, size = 1) {
        if (isString(input)) {
            return this.chunk(input
                .split(''), size);
        }
        return Array.isArray(input) ? this.chunk(input, size) : input;
    }
    chunk(input, size) {
        return Array(Math.ceil(input.length / size))
            .fill([])
            .map((_, index) => index * size)
            .map(begin => input.slice(begin, begin + size));
    }
}
ChunkPipe.decorators = [
    { type: Pipe, args: [{ name: 'chunk' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmsuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbmctcGlwZXMvcGlwZXMvYXJyYXkvY2h1bmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRzlDLE1BQU0sT0FBTyxTQUFTO0lBQ3BCLFNBQVMsQ0FBQyxLQUFVLEVBQUUsT0FBZSxDQUFDO1FBQ3BDLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25CLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO2lCQUNwQixLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDckI7UUFFRCxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDaEUsQ0FBQztJQUVPLEtBQUssQ0FBQyxLQUFZLEVBQUUsSUFBWTtRQUN0QyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDekMsSUFBSSxDQUFDLEVBQUUsQ0FBQzthQUNSLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7YUFDL0IsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7O1lBaEJGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi4vaGVscGVycy9oZWxwZXJzJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2NodW5rJyB9KVxyXG5leHBvcnQgY2xhc3MgQ2h1bmtQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKGlucHV0OiBhbnksIHNpemU6IG51bWJlciA9IDEpOiBhbnkge1xyXG4gICAgaWYgKGlzU3RyaW5nKGlucHV0KSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jaHVuayhpbnB1dFxyXG4gICAgICAgIC5zcGxpdCgnJyksIHNpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGlucHV0KSA/IHRoaXMuY2h1bmsoaW5wdXQsIHNpemUpIDogaW5wdXQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNodW5rKGlucHV0OiBhbnlbXSwgc2l6ZTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gQXJyYXkoTWF0aC5jZWlsKGlucHV0Lmxlbmd0aCAvIHNpemUpKVxyXG4gICAgICAuZmlsbChbXSlcclxuICAgICAgLm1hcCgoXywgaW5kZXgpID0+IGluZGV4ICogc2l6ZSlcclxuICAgICAgLm1hcChiZWdpbiA9PiBpbnB1dC5zbGljZShiZWdpbiwgYmVnaW4gKyBzaXplKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==