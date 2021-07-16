import { Pipe } from '@angular/core';
export class StripTagsPipe {
    transform(text, ...allowedTags) {
        return allowedTags.length > 0
            ? text.replace(new RegExp(`<(?!\/?(${allowedTags.join('|')})\s*\/?)[^>]+>`, 'g'), '')
            : text.replace(/<(?:.|\s)*?>/g, '');
    }
}
StripTagsPipe.decorators = [
    { type: Pipe, args: [{ name: 'stripTags' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaXAtdGFncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9uZy1waXBlcy9waXBlcy9zdHJpbmcvc3RyaXAtdGFncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUdwRCxNQUFNLE9BQU8sYUFBYTtJQUN4QixTQUFTLENBQUMsSUFBWSxFQUFFLEdBQUcsV0FBa0I7UUFDM0MsT0FBTyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDM0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsV0FBVyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDckYsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7OztZQU5GLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdzdHJpcFRhZ3MnIH0pXHJcbmV4cG9ydCBjbGFzcyBTdHJpcFRhZ3NQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKHRleHQ6IHN0cmluZywgLi4uYWxsb3dlZFRhZ3M6IGFueVtdKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBhbGxvd2VkVGFncy5sZW5ndGggPiAwXHJcbiAgICAgID8gdGV4dC5yZXBsYWNlKG5ldyBSZWdFeHAoYDwoPyFcXC8/KCR7YWxsb3dlZFRhZ3Muam9pbignfCcpfSlcXHMqXFwvPylbXj5dKz5gLCAnZycpLCAnJylcclxuICAgICAgOiB0ZXh0LnJlcGxhY2UoLzwoPzoufFxccykqPz4vZywgJycpO1xyXG4gIH1cclxufVxyXG4iXX0=