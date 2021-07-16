import { Pipe } from '@angular/core';
export class SamplePipe {
    transform(input, len = 1) {
        if (!Array.isArray(input)) {
            return input;
        }
        let sample = [];
        const tmp = [...input];
        const l = len < tmp.length ? len : tmp.length;
        for (let i = 0; i < l; ++i) {
            sample = sample.concat(tmp.splice(Math.floor(Math.random() * tmp.length), 1));
        }
        return sample;
    }
}
SamplePipe.decorators = [
    { type: Pipe, args: [{ name: 'sample' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL25nLXBpcGVzL3BpcGVzL2FycmF5L3NhbXBsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUdwRCxNQUFNLE9BQU8sVUFBVTtJQUlyQixTQUFTLENBQUMsS0FBVSxFQUFFLE1BQWMsQ0FBQztRQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN6QixPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsSUFBSSxNQUFNLEdBQVUsRUFBRSxDQUFDO1FBQ3ZCLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUN2QixNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQzlDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDMUIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMvRTtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7OztZQWxCRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnc2FtcGxlJyB9KVxyXG5leHBvcnQgY2xhc3MgU2FtcGxlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybShpbnB1dDogYW55W10sIGxlbj86IG51bWJlcik6IGFueVtdO1xyXG4gIHRyYW5zZm9ybTxUPihpbnB1dDogVCwgbGVuPzogbnVtYmVyKTogVDtcclxuXHJcbiAgdHJhbnNmb3JtKGlucHV0OiBhbnksIGxlbjogbnVtYmVyID0gMSk6IGFueSB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XHJcbiAgICAgIHJldHVybiBpbnB1dDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgc2FtcGxlOiBhbnlbXSA9IFtdO1xyXG4gICAgY29uc3QgdG1wID0gWy4uLmlucHV0XTtcclxuICAgIGNvbnN0IGwgPSBsZW4gPCB0bXAubGVuZ3RoID8gbGVuIDogdG1wLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgKytpKSB7XHJcbiAgICAgIHNhbXBsZSA9IHNhbXBsZS5jb25jYXQodG1wLnNwbGljZShNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0bXAubGVuZ3RoKSwgMSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzYW1wbGU7XHJcbiAgfVxyXG59XHJcbiJdfQ==