import { ExternalLink } from 'lucide-react'
import Badge from '../assets/claude-architect-badge.webp'
import { APP_CONSTANTS } from '../utils/constants'
import { useLang } from '../i18n'

export default function CertificationCard() {
    const { t } = useLang()
    return (
        <a
            href={APP_CONSTANTS.credlyUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='group inline-flex items-center gap-4 rounded-2xl bg-white p-3 pr-5 text-left shadow-lg ring-1 ring-black/5 hover:shadow-xl hover:-translate-y-0.5 transition-all'
        >
            <img src={Badge} alt='Claude Certified Architect badge' width={64} height={64} className='w-16 h-16 object-contain' />
            <span className='flex flex-col'>
                <span className='font-display font-bold text-chocolate leading-tight'>Claude Certified Architect</span>
                <span className='text-xs text-chocolate/70'>Foundations · {t.certIssued}</span>
                <span className='mt-1 inline-flex items-center gap-1 text-xs font-semibold text-tangerine-dark group-hover:underline underline-offset-4'>
                    {t.certVerify} <ExternalLink className='w-3 h-3' />
                </span>
            </span>
        </a>
    )
}
