'use strict';

module.exports = function (t, a) {
	var d = new Date(2011, 2, 3, 3, 5, 5, 32);
	t = t(' %Y.%y.%m.%d.%H.%M.%S.%L ').call;
	a(t(d), ' 2011.11.03.03.03.05.05.032 ');
};
