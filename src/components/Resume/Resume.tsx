import { AiOutlineDownload } from 'solid-icons/ai'
import Particles from '../Particles'
import pdfEn from '../../assets/Olivier_Page_CV_EN.pdf'
import pdfFr from '../../assets/Olivier_Page_CV_FR.pdf'
import { useI18n } from '../../i18n'

export default function Resume() {
  const { dict, locale } = useI18n()
  const pdf = () => (locale() === 'fr' ? pdfFr : pdfEn)

  return (
    <div class="relative z-0 pt-24 pb-8 md:pt-28">
      <Particles />
      <div class="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4">
        <a
          href={pdf()}
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary w-full justify-center !max-w-[250px]"
        >
          <AiOutlineDownload /> {dict().resume.download}
        </a>

        <div class="my-8 flex w-full justify-center md:my-10">
          <iframe
            src={`${pdf()}#view=FitH`}
            title={dict().resume.download}
            class="h-[60vh] w-full max-w-3xl rounded-lg border border-purple-500/30 sm:h-[70vh] md:h-[80vh]"
          />
        </div>

        <a
          href={pdf()}
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary w-full justify-center !max-w-[250px]"
        >
          <AiOutlineDownload /> {dict().resume.download}
        </a>
      </div>
    </div>
  )
}
