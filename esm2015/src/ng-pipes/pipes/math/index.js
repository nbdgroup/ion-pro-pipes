import { NgModule } from '@angular/core';
import { MaxPipe } from './max';
import { MinPipe } from './min';
import { PercentagePipe } from './percentage';
import { SumPipe } from './sum';
import { FloorPipe } from './floor';
import { RoundPipe } from './round';
import { SqrtPipe } from './sqrt';
import { PowerPipe } from './pow';
import { CeilPipe } from './ceil';
import { DegreesPipe } from './degrees';
import { BytesPipe } from './bytes';
import { RadiansPipe } from './radians';
export const MATH_PIPES = [
    MaxPipe,
    MinPipe,
    PercentagePipe,
    SumPipe,
    FloorPipe,
    RoundPipe,
    SqrtPipe,
    PowerPipe,
    CeilPipe,
    DegreesPipe,
    BytesPipe,
    RadiansPipe,
];
export class NgMathPipesModule {
}
NgMathPipesModule.decorators = [
    { type: NgModule, args: [{
                declarations: MATH_PIPES,
                imports: [],
                exports: MATH_PIPES,
            },] }
];
export { MaxPipe } from './max';
export { MinPipe } from './min';
export { PercentagePipe } from './percentage';
export { SumPipe } from './sum';
export { FloorPipe } from './floor';
export { RoundPipe } from './round';
export { SqrtPipe } from './sqrt';
export { PowerPipe } from './pow';
export { CeilPipe } from './ceil';
export { DegreesPipe } from './degrees';
export { BytesPipe } from './bytes';
export { RadiansPipe } from './radians';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbmctcGlwZXMvcGlwZXMvbWF0aC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDaEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUNoQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzlDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDaEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNwQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDbEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUNsQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDeEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNwQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRXhDLE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBRztJQUN4QixPQUFPO0lBQ1AsT0FBTztJQUNQLGNBQWM7SUFDZCxPQUFPO0lBQ1AsU0FBUztJQUNULFNBQVM7SUFDVCxRQUFRO0lBQ1IsU0FBUztJQUNULFFBQVE7SUFDUixXQUFXO0lBQ1gsU0FBUztJQUNULFdBQVc7Q0FDWixDQUFDO0FBT0YsTUFBTSxPQUFPLGlCQUFpQjs7O1lBTDdCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsVUFBVTtnQkFDeEIsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLFVBQVU7YUFDcEI7O0FBR0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUNoQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQ2hDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDOUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUNoQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDcEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNsQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDbEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUN4QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxXQUFXLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXhQaXBlIH0gZnJvbSAnLi9tYXgnO1xyXG5pbXBvcnQgeyBNaW5QaXBlIH0gZnJvbSAnLi9taW4nO1xyXG5pbXBvcnQgeyBQZXJjZW50YWdlUGlwZSB9IGZyb20gJy4vcGVyY2VudGFnZSc7XHJcbmltcG9ydCB7IFN1bVBpcGUgfSBmcm9tICcuL3N1bSc7XHJcbmltcG9ydCB7IEZsb29yUGlwZSB9IGZyb20gJy4vZmxvb3InO1xyXG5pbXBvcnQgeyBSb3VuZFBpcGUgfSBmcm9tICcuL3JvdW5kJztcclxuaW1wb3J0IHsgU3FydFBpcGUgfSBmcm9tICcuL3NxcnQnO1xyXG5pbXBvcnQgeyBQb3dlclBpcGUgfSBmcm9tICcuL3Bvdyc7XHJcbmltcG9ydCB7IENlaWxQaXBlIH0gZnJvbSAnLi9jZWlsJztcclxuaW1wb3J0IHsgRGVncmVlc1BpcGUgfSBmcm9tICcuL2RlZ3JlZXMnO1xyXG5pbXBvcnQgeyBCeXRlc1BpcGUgfSBmcm9tICcuL2J5dGVzJztcclxuaW1wb3J0IHsgUmFkaWFuc1BpcGUgfSBmcm9tICcuL3JhZGlhbnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1BVEhfUElQRVMgPSBbXHJcbiAgTWF4UGlwZSxcclxuICBNaW5QaXBlLFxyXG4gIFBlcmNlbnRhZ2VQaXBlLFxyXG4gIFN1bVBpcGUsXHJcbiAgRmxvb3JQaXBlLFxyXG4gIFJvdW5kUGlwZSxcclxuICBTcXJ0UGlwZSxcclxuICBQb3dlclBpcGUsXHJcbiAgQ2VpbFBpcGUsXHJcbiAgRGVncmVlc1BpcGUsXHJcbiAgQnl0ZXNQaXBlLFxyXG4gIFJhZGlhbnNQaXBlLFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IE1BVEhfUElQRVMsXHJcbiAgaW1wb3J0czogW10sXHJcbiAgZXhwb3J0czogTUFUSF9QSVBFUyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE5nTWF0aFBpcGVzTW9kdWxlIHt9XHJcblxyXG5leHBvcnQgeyBNYXhQaXBlIH0gZnJvbSAnLi9tYXgnO1xyXG5leHBvcnQgeyBNaW5QaXBlIH0gZnJvbSAnLi9taW4nO1xyXG5leHBvcnQgeyBQZXJjZW50YWdlUGlwZSB9IGZyb20gJy4vcGVyY2VudGFnZSc7XHJcbmV4cG9ydCB7IFN1bVBpcGUgfSBmcm9tICcuL3N1bSc7XHJcbmV4cG9ydCB7IEZsb29yUGlwZSB9IGZyb20gJy4vZmxvb3InO1xyXG5leHBvcnQgeyBSb3VuZFBpcGUgfSBmcm9tICcuL3JvdW5kJztcclxuZXhwb3J0IHsgU3FydFBpcGUgfSBmcm9tICcuL3NxcnQnO1xyXG5leHBvcnQgeyBQb3dlclBpcGUgfSBmcm9tICcuL3Bvdyc7XHJcbmV4cG9ydCB7IENlaWxQaXBlIH0gZnJvbSAnLi9jZWlsJztcclxuZXhwb3J0IHsgRGVncmVlc1BpcGUgfSBmcm9tICcuL2RlZ3JlZXMnO1xyXG5leHBvcnQgeyBCeXRlc1BpcGUgfSBmcm9tICcuL2J5dGVzJztcclxuZXhwb3J0IHsgUmFkaWFuc1BpcGUgfSBmcm9tICcuL3JhZGlhbnMnO1xyXG4iXX0=