const Notice = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 prose prose-slate dark:prose-invert">
      <div className="space-y-8">
        <div className="border-b pb-4">
          <h1 className="text-3xl font-bold mb-2">공지사항</h1>
          <div className="text-sm text-gray-500">
            Last Updated: 6/18/24 at 12:00 pm
          </div>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">입장</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <p className="text-gray-700">
                  사이트 접속은 이메일 주소로 발송된 개인 초대를 통해서만
                  가능합니다. 이 아이디를 통해서만 접속이 통제되고, 계정 정보를
                  공유하는 것은 엄격하게 금지됩니다.
                </p>
              </li>
              <li>
                <p className="text-gray-700">
                  사이트 접속은 동시간대에 한 기기로만 접속이 가능하여, 다른
                  기기로{" "}
                  <strong className="font-semibold">동시 접속 불가</strong>
                  합니다.
                </p>
              </li>
              <li>
                <p className="text-gray-700">
                  타인에게 초대장을 판매하거나 양도하는 것은 엄격하게
                  금지합니다.
                </p>
              </li>
              <li>
                <p className="text-gray-700">
                  위반 사례가 발생시 해고를 포함한 인사조치가 이루어질 수 있으니
                  숙지바랍니다.
                </p>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">상품 및 교환환불</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <p className="text-gray-700">
                  행사 시 구매한 제품은{" "}
                  <strong className="font-semibold">
                    교환 및 환불은 절대 불가
                  </strong>
                  하며, 수선은 본인이 책임하에 진행합니다. (디올 매장 수선 불가)
                </p>
              </li>
              <li>
                <p className="text-gray-700">
                  제품 및 배송 관련 문의 있으신 경우{" "}
                  <strong className="font-semibold">수령 후 3일내 문의</strong>{" "}
                  해주시기 바랍니다. 그 이후 문의에 대해서는 접수가 불가 하오니,
                  이점 유의해주시기 바랍니다. (문의:{" "}
                  <a
                    href="mailto:customerservice@ilyang.com"
                    target="_blank"
                    data-link-card="true"
                  >
                    customerservice@ilyang.com
                  </a>
                  )
                </p>
              </li>
              <li>
                <p className="text-gray-700">
                  해당 세일에서 구입한 제품은 가방 및 SLG의 부속품(스트랩, 참,
                  파우치) 미포함 및 결제오류 이외에는 교환 및 환불 불가합니다.
                  Private Sale에서 구입한 상품에는 더스트백을 포함한 별도의
                  패키징을 지원하지 않습니다.
                </p>
              </li>
              <li>
                <p className="text-gray-700">
                  동시 결제로 인한 재고 부족 혹은 출고 전 하자 발견 시 개별 연락
                  후 구매 취소될 수 있습니다.
                </p>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">결제 및 배송</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <p className="text-gray-700">
                  토스로 온라인 결제 진행 예정입니다. 더욱 빠른 결제 및 진행을
                  원하시는 분들은 토스 간편결제 미리 등록하시기 바랍니다.
                </p>
              </li>
              <li>
                <p className="text-gray-700">
                  결제횟수는 초대메일 및 장바구니에서 확인 가능합니다.
                </p>
              </li>
              <li>
                <p className="text-gray-700">
                  본인 명의 신용카드/체크카드 결제만 가능하며 원화로만 계산이
                  가능합니다.
                </p>
              </li>
              <li>
                <p className="text-gray-700">
                  배송 예상 시간: 결제 완료일로부터 영업일 기준 최대 2주 소요
                </p>
              </li>
              <li>
                <p className="text-gray-700">
                  배송은 사전등록시 등록한 주소지로만 배송 가능 하니 배송지 등록
                  시 유의 부탁드립니다.{" "}
                  <strong className="font-semibold">(주소지 변경 불가)</strong>
                </p>
              </li>
              <li>
                <p className="text-gray-700">
                  배송이 시작되면 일양 택배에서 등록하신 연락처로 문자/카카오톡
                  발송 예정입니다.
                </p>
              </li>
              <li>
                <p className="text-gray-700">
                  고객 이동이 많은 백화점 매장으로는 배송이 불가 하오니 이점
                  참고 부탁드립니다.
                </p>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">구매제한</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <p className="text-gray-700">
                  <strong className="font-semibold">
                    동일상품 (Style+Color+Size)는 2개
                  </strong>
                  까지 구매 가능합니다.
                </p>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">구매한도</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <p className="text-gray-700">
                  초대메일 혹은 화면상단에서 구매한도를 확인해주시기 바랍니다.
                </p>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">주의사항</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <p className="text-gray-700">
                  인스타그램, 페이스북, 네이버, 카카오톡 등을 포함한 모든 소셜
                  미디어에 행사 정보 및 판매제품을 게시하거나 재판매를 시도 또는
                  재판매를 하는 경우{" "}
                  <strong className="font-semibold">
                    징계조치가 내려질 수 있으며
                  </strong>{" "}
                  직원 구매한 상품의 회수 및 향후 2년간 Private Sale참가가
                  제한될 수 있습니다.
                </p>
              </li>
              <li>
                <p className="text-gray-700">
                  본인이 아닌 타인이 배송 받는 경우 발생할 수 있는 유출
                  관련사고를 포함한 각종 문제에 대한 책임은 본인이 져야 하므로
                  주소 등록 시 이점 유의 부탁드립니다.
                </p>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Entrance</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <p className="text-gray-700">
                  Access to the site is only possible through a personal
                  invitation sent to your email address. Access is controlled
                  solely through this account, and sharing account information
                  is strictly prohibited.
                </p>
              </li>
              <li>
                <p className="text-gray-700">
                  The site can be accessed from{" "}
                  <strong className="font-semibold">
                    only one device at the same time
                  </strong>
                  , and simultaneous access from different devices is not
                  possible.
                </p>
              </li>
              <li>
                <p className="text-gray-700">
                  Selling or transferring invitations to others is strictly
                  prohibited.
                </p>
              </li>
              <li>
                <p className="text-gray-700">
                  Please note that personnel actions, including dismissal, may
                  result from any violations.
                </p>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Item and Exchange/Refund
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <p className="text-gray-700">
                  Items purchased during the event
                  <strong className="font-semibold">
                    {" "}
                    cannot be exchanged or refunded
                  </strong>
                  , and repairs are at your own risk. (Repairs are not available
                  at Dior stores.)
                </p>
              </li>
              <li>
                <p className="text-gray-700">
                  If you have any questions regarding the item or shipping,
                  please contact Il-yang customer service{" "}
                  <strong className="font-semibold">
                    within 3 days of receipt
                  </strong>
                  . Please note that inquiries after that will not be accepted.
                  (Inquiries:{" "}
                  <a
                    href="mailto:customerservice@ilyang.com"
                    target="_blank"
                    data-link-card="true"
                  >
                    customerservice@ilyang.com
                  </a>
                  )
                </p>
              </li>
              <li>
                <p className="text-gray-700">
                  Items purchased in this sale cannot be exchanged or refunded
                  unless the accessories (strap, charm, pouch) for bags and SLGs
                  were not included or when a payment error occurred. Separate
                  packaging, including dust bags, is not supported for items
                  purchased through private sale.
                </p>
              </li>
              <li>
                <p className="text-gray-700">
                  If there is a shortage of stock due to simultaneous payment or
                  a defect is discovered before shipment, the purchase may be
                  cancelled after individual contact.
                </p>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Payment and Shipping</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <p className="text-gray-700">
                  Online payment will be made via Toss. In case you wish for
                  even faster payment and processing, please register in advance
                  for Toss Easy Payment.
                </p>
              </li>
              <li>
                <p className="text-gray-700">
                  The card payment limit information will be provided in the
                  invitation email and in your cart.
                </p>
              </li>
              <li>
                <p className="text-gray-700">
                  Payment can only be made with a credit/debit card in your own
                  name and only in Korean Won.
                </p>
              </li>
              <li>
                <p className="text-gray-700">
                  Estimated shipping time: Up to 2 weeks from the order date.
                </p>
              </li>
              <li>
                <p className="text-gray-700">
                  Shipping is only possible to the address registered during
                  pre-registration, so please be careful when registering the
                  shipping address.{" "}
                  <strong className="font-semibold">
                    (Address cannot be changed.)
                  </strong>
                </p>
              </li>
              <li>
                <p className="text-gray-700">
                  Once shipment begins, Ilyang Courier will send a text
                  message/KakaoTalk to the registered contact number.
                </p>
              </li>
              <li>
                <p className="text-gray-700">
                  Please note that shipment is not possible to department stores
                  with frequent customer traffic.
                </p>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Purchase Limits</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <p className="text-gray-700">
                  Up to{" "}
                  <strong className="font-semibold">
                    2 identical products (Style+Color+Size){" "}
                  </strong>
                  can be purchased.
                </p>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Quota</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <p className="text-gray-700">
                  Please check the quota for items in the invitation email or at
                  the top of this site.
                </p>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Cautions</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <p className="text-gray-700">
                  Posting event information and sale items on all social media
                  platforms, including Instagram, Facebook, Naver, and
                  KakaoTalk, or attempting to resell them
                  <strong className="font-semibold">
                    {" "}
                    may result in disciplinary action
                  </strong>
                  , including confiscation of items purchased and restriction
                  from participating in Private Sale for up to 2 years
                  thereafter.
                </p>
              </li>
              <li>
                <p className="text-gray-700">
                  You are responsible for any problems, including leakage
                  incidents, that may occur if someone other than you receives
                  the shipment. Therefore, please be cautious when registering
                  the address.
                </p>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Notice;
