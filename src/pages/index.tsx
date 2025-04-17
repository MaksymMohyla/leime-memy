import { Link } from '@heroui/link';
import { button as buttonStyles } from '@heroui/theme';

import { title } from '@/components/primitives';
import { GithubIcon } from '@/components/icons';
import DefaultLayout from '@/layouts/default';

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>Browse through our </span>
          <span className={title({ color: 'violet' })}>
            beautiful&nbsp;memes
          </span>
          <br />
          <span className={title()}>
            in 'Table' and 'List' pages on Navigation bar!
          </span>
        </div>

        <div className="flex gap-3 mt-20">
          <Link
            isExternal
            className={buttonStyles({
              color: 'primary',
              radius: 'full',
              variant: 'shadow',
            })}
            href={'https://www.linkedin.com/in/maksym-mohyla-781377351/'}
          >
            My LinkedIn
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: 'bordered', radius: 'full' })}
            href={'https://github.com/MaksymMohyla/'}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>
      </section>
    </DefaultLayout>
  );
}
