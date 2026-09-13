import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Heart, 
  ShieldCheck, 
  Zap, 
  ArrowLeft, 
  Code2, 
  Phone, 
  Instagram, 
  Facebook, 
  Truck, 
  Award, 
  Package, 
  Sun, 
  CheckCircle2,
  Rocket
} from 'lucide-react';
import bowlImg from '../assets/images/bowl-fruits.png';

export const AboutPage = () => {
  return (
    <div className="container" style={{ padding: '50px 24px 80px 24px' }}>
      {/* Hero Section */}
      <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 50px auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--color-yellow-light)', color: 'var(--color-green-dark)', fontWeight: 800, padding: '6px 18px', borderRadius: '20px', fontSize: '0.88rem', marginBottom: '14px' }}>
          <Award size={16} />
          <span>المشروع الأول في درعا للفواكه المجففة بالتبريد 🍋</span>
        </div>
        <h1 style={{ fontSize: '2.6rem', fontWeight: 900, color: 'var(--color-green-dark)', marginBottom: '16px' }}>
          قصة ليمون.. فكرة فضائية تنطلق من حوران
        </h1>
        <p style={{ color: 'var(--color-text)', fontSize: '1.12rem', lineHeight: 1.8 }}>
          مشروع سوري رائد يختص بإنتاج وتوزيع الفواكه والأغذية المجففة بتقنية التجميد المتقدمة (طعام رواد الفضاء). نعمل بشغف على إعادة صياغة مفهوم الغذاء الصحي، وتقديم فواكه طبيعية نقية تمنحك طعماً وقرمشة لا تقاوم في كافة أيام السنة حتى بعكس مواسمها.
        </p>
      </div>

      {/* Story & Image Row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '40px',
        alignItems: 'center',
        background: '#FFFDF5',
        border: '1px solid var(--border-color)',
        borderRadius: '24px',
        padding: '36px',
        marginBottom: '50px'
      }}>
        <div>
          <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--color-green-dark)', background: 'var(--color-green-soft)', padding: '3px 12px', borderRadius: '12px', display: 'inline-block', marginBottom: '10px' }}>
            رؤيتنا ورسالتنا
          </span>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--color-green-dark)', marginBottom: '16px' }}>
            نقل ثقافة أطعمة رواد الفضاء إلى كل بيت سوري
          </h2>
          <p style={{ color: 'var(--color-text)', lineHeight: 1.8, marginBottom: '14px', fontSize: '0.95rem' }}>
            بدأت رحلتنا في درعا بهدف تقديم بديل غذائي استثنائي وصحي يحمي أطفالنا وعائلاتنا من السناكات المصنعة والشيبس المشبع بالزيوت والمواد الكيميائية. اعتمدنا على <strong>تقنية التجفيف بالتبريد (Freeze-Drying)</strong> التي ابتكرتها وكالة ناسا لإطعام رواد الفضاء في رحلاتهم الطويلة.
          </p>
          <p style={{ color: 'var(--color-text)', lineHeight: 1.8, marginBottom: '14px', fontSize: '0.95rem' }}>
            هذه التقنية تسحب أكثر من <strong>90% من الماء</strong> دون استخدام أي حرارة تضر بالمكونات، ما يحبس داخل كل حبة فاكهة أكثر من <strong>95% من فيتاميناتها ومضادات الأكسدة</strong>، ويمنحها قرمشة خفيفة كالهواء وتذوب في الفم بنكهة طبيعية مركزة.
          </p>
          <p style={{ color: 'var(--color-text)', lineHeight: 1.8, fontSize: '0.95rem' }}>
            الآن، بفضل ليمون، يمكنك الاستمتاع بفاكهتك المفضلة في أي وقت من العام حتى في <strong>عكس موسمها الطبيعي</strong>، وبمنشأ سوري نفخر به وخدمة شحن تصلك إلى باب منزلك في كافة المحافظات.
          </p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <img
            src={bowlImg}
            alt="فواكه ليمون المجففة بالتبريد"
            style={{ maxWidth: '100%', maxHeight: '320px', objectFit: 'contain', filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.08))' }}
          />
        </div>
      </div>

      {/* Deep Specification & Storage Card */}
      <div style={{
        background: '#FFFFFF',
        border: '1.5px solid var(--border-color)',
        borderRadius: '24px',
        padding: '36px',
        marginBottom: '50px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
      }}>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--color-green-dark)', marginBottom: '20px', textAlign: 'center' }}>
          حقائق علمية ومواصفات علبة ليمون 🍋
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px'
        }}>
          <div style={{ background: '#FFFDF5', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <Package size={22} style={{ color: 'var(--color-green-dark)' }} />
              <h4 style={{ fontSize: '1.05rem', fontWeight: 800 }}>400 إلى 500 غرام فريش</h4>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              كل علبة تشتريها تحتوي على خلاصة ما يقارب نصف كيلوغرام من الفاكهة الطازجة الفاخرة، أصبح وزنها الصافي 70 إلى 90 غرام فقط بعد سحب الماء بالكامل.
            </p>
          </div>

          <div style={{ background: '#FFFDF5', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <ShieldCheck size={22} style={{ color: 'var(--color-green-dark)' }} />
              <h4 style={{ fontSize: '1.05rem', fontWeight: 800 }}>95% قيمة غذائية محفوظة</h4>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              الفواكه لا تفقد أياً من عناصرها الحيوية؛ الفيتامينات، المعادن، الألياف واللون الطبيعي محفوظة بالكامل وبدون إضافة غرام واحد من السكر أو المواد الحافظة.
            </p>
          </div>

          <div style={{ background: '#FFFDF5', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <Sun size={22} style={{ color: '#d97706' }} />
              <h4 style={{ fontSize: '1.05rem', fontWeight: 800 }}>إرشادات الحفظ والاستخدام</h4>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              المنتج <strong>حساس للرطوبة</strong>؛ يؤكل بشكل مباشر ولا يحتاج تبريد أو أي إضافات. يُحفظ في مكان بارد وجاف بعيداً عن أشعة الشمس المباشرة.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '24px',
        marginBottom: '50px'
      }}>
        <div style={{ background: '#FFF', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
          <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--color-yellow-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', color: 'var(--color-green-dark)' }}>
            <Sparkles size={24} />
          </div>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '8px' }}>منشأ سوري 100%</h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
            إنتاج محلي بأعلى معايير الجودة العالمية لنبرهن على قدرة الكفاءات السورية على الابتكار.
          </p>
        </div>

        <div style={{ background: '#FFF', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
          <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--color-yellow-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', color: 'var(--color-green-dark)' }}>
            <Rocket size={24} />
          </div>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '8px' }}>طعام رواد الفضاء</h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
            تجربة حسية فريدة، قرمشة خفيفة جداً تذوب في الفم بنكهة مركزة وممتعة لكافة الأعمار.
          </p>
        </div>

        <div style={{ background: '#FFF', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
          <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--color-yellow-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', color: 'var(--color-green-dark)' }}>
            <Zap size={24} />
          </div>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '8px' }}>بديل صحي للشيبس</h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
            سناك مثالي للأطفال أثناء المدارس، وللرياضيين ومحبي النمط الصحي بدون أي دهون أو زيوت.
          </p>
        </div>

        <div style={{ background: '#FFF', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
          <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--color-yellow-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', color: 'var(--color-green-dark)' }}>
            <Truck size={24} />
          </div>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '8px' }}>شحن لكافة المحافظات</h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
            خدمة شحن سريعة وآمنة تضمن وصول العلب مغلقة ومحكمة القرمشة إلى باب منزلك.
          </p>
        </div>
      </div>

      {/* Official Contact & Socials Bar */}
      <div style={{
        background: '#FFFDF5',
        border: '1.5px solid var(--border-color)',
        borderRadius: '20px',
        padding: '28px',
        marginBottom: '40px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '20px'
      }}>
        <div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--color-green-dark)', marginBottom: '6px' }}>
            تواصل مع متجر ليمون مباشرة 🍋
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
            للطلبات، الاستفسارات، وطلبات الجملة والشحن للمحافظات:
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <a
            href="https://wa.me/963953420082"
            target="_blank"
            rel="noreferrer"
            className="btn-yellow-pill"
            style={{ display: 'inline-flex', gap: '8px', padding: '10px 20px' }}
          >
            <Phone size={16} />
            <span>واتساب الطلبات: 0953420082</span>
          </a>

          <a
            href="https://www.instagram.com/lemon.official.sy?igsh=MTNhZnM3eHR5a2xmeg=="
            target="_blank"
            rel="noreferrer"
            className="btn-video-outline"
            style={{ display: 'inline-flex', gap: '8px', padding: '10px 18px' }}
          >
            <Instagram size={16} style={{ color: '#E1306C' }} />
            <span>إنستغرام ليمون</span>
          </a>

          <a
            href="https://www.facebook.com/share/1DrTtcCPub/"
            target="_blank"
            rel="noreferrer"
            className="btn-video-outline"
            style={{ display: 'inline-flex', gap: '8px', padding: '10px 18px' }}
          >
            <Facebook size={16} style={{ color: '#1877F2' }} />
            <span>فيسبوك ليمون</span>
          </a>
        </div>
      </div>

      {/* Technology Partner Section */}
      <div style={{
        background: '#FFFFFF',
        border: '1px solid var(--border-color)',
        borderRadius: '20px',
        padding: '30px',
        marginBottom: '40px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '24px',
        boxShadow: 'var(--shadow-card)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, var(--color-green-dark), #004d2a)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 14px rgba(0, 104, 56, 0.25)'
          }}>
            <Code2 size={26} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-green-dark)', background: 'var(--color-green-soft)', padding: '2px 10px', borderRadius: '12px' }}>
                الشريك التقني والتطوير
              </span>
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: 'var(--color-text-dark)' }}>
              تم تصميم وتطوير المنصة بواسطة شركة AM Digital
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>
              حلول برمجية متطورة وتجربة مستخدم وتجارة إلكترونية سريعة.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <a
            href="https://wa.me/963935073214"
            target="_blank"
            rel="noreferrer"
            className="btn-video-outline"
            style={{
              padding: '9px 18px',
              fontSize: '0.88rem',
              display: 'inline-flex',
              gap: '8px',
              borderRadius: 'var(--radius-full)'
            }}
          >
            <Phone size={15} style={{ color: 'var(--color-green-dark)' }} />
            <span dir="ltr">+963 935 073 214</span>
          </a>

          <a
            href="https://www.instagram.com/am_digital.sy?stkn=MWl2cG1uenl0bDcwaQ=="
            target="_blank"
            rel="noreferrer"
            className="btn-yellow-pill"
            style={{
              padding: '9px 18px',
              fontSize: '0.88rem',
              display: 'inline-flex',
              gap: '8px'
            }}
          >
            <Instagram size={15} />
            <span>حساب الإنستغرام</span>
          </a>
        </div>
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', paddingTop: '10px' }}>
        <Link to="/products" className="btn-yellow-pill" style={{ display: 'inline-flex', padding: '13px 36px', fontSize: '1.05rem' }}>
          <span>تصفح كافة منتجات ليمون (350 ل.س)</span>
          <ArrowLeft size={18} />
        </Link>
      </div>
    </div>
  );
};
