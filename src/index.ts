import type { HookConfig } from '@directus/extensions';

const hook: HookConfig = ({ embed }) => {
	embed(
		'body',
    /* html */ `
    <script>
      function injectAttribute(name, value) {
        if (!value) return;
        const sanitizedValue = value.toLowerCase().replace(/\\s/g, '-');
        document.body.setAttribute(name, sanitizedValue);
      }

      async function fetchAndInjectAttributes() {
        try {
          const response = await fetch(\`\${window.location.origin}/users/me?fields=id,role.name\`).then(res => res.json());
          injectAttribute('data-user-id', response?.data?.id);
          injectAttribute('data-user-role', response?.data?.role?.name ?? 'public');
        } catch (error) {
          console.error('[current-role-hook]', error.message);
        }
      }

      (async () => {
		// Initial attributes
		injectAttribute('data-user-role', 'public');

        // Initial fetch
        await fetchAndInjectAttributes();

        // Track changes to the document title, refetch if it changes
        let oldDirectusTitle = document.title;
        setInterval(async () => {
          if (document.title !== oldDirectusTitle) {
            oldDirectusTitle = document.title;
            await fetchAndInjectAttributes();
          }
        }, 1000);
      })();
    </script>
    `
	);
};

export default hook;