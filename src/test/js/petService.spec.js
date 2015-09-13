describe('one test', function(){
    var petService;

    beforeEach(module('app'));

    beforeEach(inject(function(_$injector_){
        petService = _$injector_.get('petService');
    }));

    it('a simple example', function(){
        expect(petService).not.toBe(null);
    });
});