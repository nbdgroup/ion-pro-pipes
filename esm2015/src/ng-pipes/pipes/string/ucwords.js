import { Pipe } from '@angular/core';
import { isString, ucFirst } from '../helpers/helpers';
export class UcWordsPipe {
    transform(text) {
        if (isString(text)) {
            return text
                .split(' ')
                .map((sub) => ucFirst(sub))
                .join(' ');
        }
        return text;
    }
}
UcWordsPipe.decorators = [
    { type: Pipe, args: [{ name: 'ucwords' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWN3b3Jkcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9uZy1waXBlcy9waXBlcy9zdHJpbmcvdWN3b3Jkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3ZELE1BQU0sT0FBTyxXQUFXO0lBSXRCLFNBQVMsQ0FBQyxJQUFTO1FBQ2pCLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2xCLE9BQU8sSUFBSTtpQkFDUixLQUFLLENBQUMsR0FBRyxDQUFDO2lCQUNWLEdBQUcsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDZDtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7O1lBZEYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNTdHJpbmcsIHVjRmlyc3QgfSBmcm9tICcuLi9oZWxwZXJzL2hlbHBlcnMnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAndWN3b3JkcycgfSlcclxuZXhwb3J0IGNsYXNzIFVjV29yZHNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKGlucHV0OiBzdHJpbmcpOiBzdHJpbmc7XHJcbiAgdHJhbnNmb3JtKGlucHV0OiBhbnkpOiBhbnk7XHJcblxyXG4gIHRyYW5zZm9ybSh0ZXh0OiBhbnkpOiBzdHJpbmcge1xyXG4gICAgaWYgKGlzU3RyaW5nKHRleHQpKSB7XHJcbiAgICAgIHJldHVybiB0ZXh0XHJcbiAgICAgICAgLnNwbGl0KCcgJylcclxuICAgICAgICAubWFwKChzdWI6IGFueSkgPT4gdWNGaXJzdChzdWIpKVxyXG4gICAgICAgIC5qb2luKCcgJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRleHQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==