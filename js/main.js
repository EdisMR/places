tailwind.config = {
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Roboto', 'sans-serif'],
			},
			colors: {
				md: {
					// Material 3 Light Palette
					primary: '#6750A4',
					onPrimary: '#FFFFFF',
					primaryContainer: '#EADDFF',
					onPrimaryContainer: '#21005D',
					secondary: '#625B71',
					onSecondary: '#FFFFFF',
					secondaryContainer: '#E8DEF8',
					onSecondaryContainer: '#1D192B',
					surface: '#FEF7FF',
					surfaceVariant: '#E7E0EC',
					onSurface: '#1D1B20',
					onSurfaceVariant: '#49454F',
					outline: '#79747E',
					// Dark Palette Supplement
					darkSurface: '#141218',
					darkSurfaceVariant: '#49454F',
					darkOnSurface: '#E6E0E9',
					darkOnSurfaceVariant: '#CAC4D0',
					darkPrimaryContainer: '#4F378B',
					darkOnPrimaryContainer: '#EADDFF',
					darkSecondaryContainer: '#4A4458',
					darkOnSecondaryContainer: '#E8DEF8'
				}
			},
			boxShadow: {
				'md-1': '0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)',
				'md-2': '0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)',
				'md-3': '0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px 0px rgba(0, 0, 0, 0.30)',
			}
		}
	}
}




// Material Ripple Effect Execution
document.addEventListener('click', function (e) {
	const button = e.target.closest('.ripple-btn');
	if (button) {
		const rect = button.getBoundingClientRect();
		const circle = document.createElement('span');
		const diameter = Math.max(rect.width, rect.height);
		const radius = diameter / 2;

		circle.style.width = circle.style.height = `${diameter}px`;
		circle.style.left = `${e.clientX - rect.left - radius}px`;
		circle.style.top = `${e.clientY - rect.top - radius}px`;
		circle.classList.add('ripple-effect');

		const existingRipple = button.querySelector('.ripple-effect');
		if (existingRipple) {
			existingRipple.remove();
		}

		button.appendChild(circle);
	}
});

// Theme Toggle Functionality (Dark / Light Mode)
const themeToggleBtn = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const htmlElement = document.documentElement;

// Initialize theme based on user preference or saved setting
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
	htmlElement.classList.add('dark');
	htmlElement.classList.remove('light');
	themeIcon.textContent = 'light_mode';
} else {
	htmlElement.classList.add('light');
	htmlElement.classList.remove('dark');
	themeIcon.textContent = 'dark_mode';
}

themeToggleBtn.addEventListener('click', () => {
	if (htmlElement.classList.contains('dark')) {
		htmlElement.classList.remove('dark');
		htmlElement.classList.add('light');
		themeIcon.textContent = 'dark_mode';
		localStorage.setItem('theme', 'light');
	} else {
		htmlElement.classList.add('dark');
		htmlElement.classList.remove('light');
		themeIcon.textContent = 'light_mode';
		localStorage.setItem('theme', 'dark');
	}
});