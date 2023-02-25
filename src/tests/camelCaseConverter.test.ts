import { toCamelCase } from '../core/camelCaseConverter';
describe('Camel case converter', () => {
	it('allows empty text', () => {
		expect(toCamelCase('')).toBe('');
	});
	it('allows capilalized word', () => {
		expect(toCamelCase('Castolo')).toBe('Castolo');
	});
	it('allows no capilalized word', () => {
		expect(toCamelCase('castolo')).toBe('Castolo');
	});
	it('allows whole capitalized word', () => {
		expect(toCamelCase('CASTOLO')).toBe('Castolo');
	});
	it('joins a chain of words separated with " "', () => {
		expect(toCamelCase('CASTOLO scores a goal')).toBe('CastoloScoresAGoal');
	});
	it('joins a chain of words separated with "_"', () => {
		expect(toCamelCase('CASTOLO_scores_a_goal')).toBe('CastoloScoresAGoal');
	});
	it('joins a chain of words separated with "-"', () => {
		expect(toCamelCase('CASTOLO-scores-a-goal')).toBe('CastoloScoresAGoal');
	});
	it('joins a chain of words separated with "-", "-" y " "', () => {
		expect(toCamelCase('CASTOLO scores_a-goal')).toBe('CastoloScoresAGoal');
	});
});
