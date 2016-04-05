describe('app', function () {
    'use strict';
    var app = window.app;

    describe('Division function', function () {
        it('should divide number a by b', function () {
            expect(app.divide(10, 5)).toEqual(2);
            expect(app.divide(15, 3)).toEqual(5)
        });
        it('should divide number a by b only when a is more than 1 and less than 100', function () {
            expect(app.divide(20, 5)).toEqual(4);
        });
        it('should return false when a is less than 1', function () {
            expect(app.divide(-2, 6)).toEqual(false);
        });
        it('should return false when a is more than 100', function () {
            expect(app.divide(105, 3)).toEqual(false);
        });
        it('should divide number a by b when a is 1', function () {
            expect(app.divide(1, -1)).toEqual(-1);
        });
        it('should divide number a by b when a is 100', function () {
            expect(app.divide(100, 10)).toEqual(10);
        });
        it('should divide number a by b when a is 0', function () {
            expect(app.divide(0, 1)).toEqual(false);
        });
        it('should divide number a by b when a is 101', function () {
            expect(app.divide(101, 10)).toEqual(false);
        });
        it('should return false when b is grater than a', function () {
            expect(app.divide(101, 103)).toEqual(false);
        });
        it('should return false when b is equal 0', function () {
            expect(app.divide(101, 0)).toEqual(false);
        });
    });

    describe('getDescendingNumbers function', function () {
        it('should return false when numberFrom is string', function () {
            expect(app.getDescendingNumbers('', 3)).toEqual(false);
        });
        it('should return false when numberTo is string', function () {
            expect(app.getDescendingNumbers(4, '')).toEqual(false);
        });
        it('should return false when numberFrom and numberTo are strings', function () {
            expect(app.getDescendingNumbers('', '')).toEqual(false);
        });
        it('should return "5 4 3 2 1 0" when numberFrom is 5 and numberTo is 0 ', function () {
            expect(app.getDescendingNumbers(5, 0)).toEqual('5 4 3 2 1 0');
        });
        it('should return "-2 -3 -4" when numberFrom is 5 and numberTo is 0 ', function () {
            expect(app.getDescendingNumbers(-2, -4)).toEqual('-2 -3 -4');
        });
        it('should return false when numberTo is more than numberFrom ', function () {
            expect(app.getDescendingNumbers(2, 6)).toEqual(false);
        });
        it('should return false when numberTo is more than numberFrom ', function () {
            expect(app.getDescendingNumbers(5, 11)).toEqual(false);
        });
    });

    describe('AreaOfTrapezeid function', function ()  {
        it('should return 0 when h is 0 or less than 0', function (){
            expect(app.areaOfTrapezoid(5,3,0)).toEqual(0);
        });
        it('should return false when a is less than 0', function (){
            expect(app.areaOfTrapezoid(-2,3,1)).toEqual(false);
        });
        it('should return false when b is less than 0', function (){
            expect(app.areaOfTrapezoid(5,-3,2)).toEqual(false);
        });
        it('should return false when h is less than 0', function (){
            expect(app.areaOfTrapezoid(5,3,-3)).toEqual(false);
        });
        it('should return false when a is string', function (){
            expect(app.areaOfTrapezoid('',3,0)).toEqual(false);
        });
        it('should return false when b is string', function (){
            expect(app.areaOfTrapezoid(5,'',0)).toEqual(false);
        });
        it('should return false when h is string', function (){
            expect(app.areaOfTrapezoid(5,3,'')).toEqual(false);
        });

    });
});
