import { Pipe } from '@angular/core';
export class FloorPipe {
    transform(num, precision = 0) {
        if (precision <= 0) {
            return Math.floor(num);
        }
        const tho = Math.pow(10, precision);
        return Math.floor(num * tho) / tho;
    }
}
FloorPipe.decorators = [
    { type: Pipe, args: [{ name: 'floor' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbmctcGlwZXMvcGlwZXMvbWF0aC9mbG9vci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUdwRCxNQUFNLE9BQU8sU0FBUztJQUNwQixTQUFTLENBQUMsR0FBVyxFQUFFLFlBQW9CLENBQUM7UUFDMUMsSUFBSSxTQUFTLElBQUksQ0FBQyxFQUFFO1lBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN4QjtRQUVELE1BQU0sR0FBRyxHQUFHLFNBQUEsRUFBRSxFQUFJLFNBQVMsQ0FBQSxDQUFDO1FBRTVCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ3JDLENBQUM7OztZQVZGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdmbG9vcicgfSlcclxuZXhwb3J0IGNsYXNzIEZsb29yUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybShudW06IG51bWJlciwgcHJlY2lzaW9uOiBudW1iZXIgPSAwKTogbnVtYmVyIHtcclxuICAgIGlmIChwcmVjaXNpb24gPD0gMCkge1xyXG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihudW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRobyA9IDEwICoqIHByZWNpc2lvbjtcclxuXHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihudW0gKiB0aG8pIC8gdGhvO1xyXG4gIH1cclxufVxyXG4iXX0=