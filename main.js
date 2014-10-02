var fixedFools = [];

window.onscroll = Cowboy.throttle(250, function() {
	var possibleOffenders = document.querySelectorAll('div:not([data-fix-watching="true"]), header:not([data-fix-watching="true"]), nav:not([data-fix-watching="true"])'),
		newFools = Array.prototype.filter.call(possibleOffenders, function (node) {
			var isFixed = window.getComputedStyle(node).getPropertyValue('position') == 'fixed',
				isTopHat = node.getBoundingClientRect().top + window.pageYOffset == document.querySelector('body').scrollTop;

			if (isFixed && isTopHat)
			{
				node.setAttribute('data-old-display', node.style.display);
				node.setAttribute('data-fix-watching', 'true');
				node.style.display = 'none';
			}

			return isFixed && isTopHat;
		});

	fixedFools = fixedFools.concat(newFools);

	if (window.pageYOffset <= 0)
	{
		for (var i = 0; i < fixedFools.length; i++)
		{
			fixedFools[i].style.display = fixedFools[i].getAttribute('data-old-display');
			fixedFools[i].setAttribute('data-fix-watching', 'false');
		}
	}
});
