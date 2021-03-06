import Layout from './layout';
import Link from 'next/link';
import MagnificPopup from './util/magnificPopup';

const data = [
  {
    thumbnail: '/static/images/gallery/650_418/01.jpg',
    source: '/static/images/gallery/1142_642/01.jpg',
    caption: 'Sunset glow, Aug, 9th, 2019',
  },
  {
    thumbnail: '/static/images/gallery/650_418/02.jpg',
    source: '/static/images/gallery/1142_642/02.jpg',
    caption: 'A sudden shower, Aug, 10th, 2019',
  },
];

const gallery = () => {
  return (
    <Layout title={'St.Vartan Basektball Gallery'}>
      <section className="small-section bg-dark">
        <div className="relative container align-left">
          <div className="row">
            <div className="col-md-8">
              <h1 className="hs-line-11 font-alt mb-10 mb-xs-0">Gallery</h1>
              <div className="hs-line-4 font-alt"></div>
            </div>

            <div className="col-md-4 mt-10">
              <div className="mod-breadcrumbs font-alt align-right">
                <Link href={'/'}>
                  <a>Home</a>
                </Link>
                &nbsp;/&nbsp;<span>Gallery</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section">
        <MagnificPopup data={data} />
      </section>
    </Layout>
  );
};

export default gallery;
