import test from 'ava';
import rs from './';

test('Check for invalid generated numbers',t => {
	t.true(rs().length > 0);
	t.truthy(rs());
	t.not(rs(), rs()); // could fail but i dont think so
	t.is(rs().length, 30);
	t.is(rs(7).length, 7);
})
