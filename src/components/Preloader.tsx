export default function Preloader(props: { loading: boolean }) {
  return <div id={props.loading ? 'preloader' : 'preloader-none'} />
}
