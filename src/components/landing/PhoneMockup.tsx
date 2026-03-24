export function PhoneMockup() {
  return (
    <div className="relative animate-float">
      <div className="relative mx-auto w-[330px] h-[715px] rounded-[42px] border border-white/10 bg-gradient-to-b from-white/8 to-white/3 p-[8px] shadow-2xl shadow-black/50">
        <div className="relative h-full w-full overflow-hidden rounded-[34px] bg-dark text-white">
          <div className="absolute inset-x-0 top-0 z-20 bg-dark/95 px-4 pt-3 pb-5">
            <div className="mb-4 flex items-center justify-between text-[11px] font-semibold text-white/90">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 12h20" />
                  <path d="M12 2v20" />
                </svg>
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12h4" />
                  <path d="M9 9h4" />
                  <path d="M15 6h4" />
                </svg>
                <span className="h-3 w-5 rounded-sm border border-white/40" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <img src="/white_cashly.png" alt="Cashly Logo" className="h-[20px] w-[63px] object-contain rounded-[5px]" />
              <div className="flex items-center gap-3 text-[#A1A1A1]">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 4a5 5 0 00-5 5v2.8L5.3 15a1 1 0 00.8 1.6h11.8a1 1 0 00.8-1.6L17 11.8V9a5 5 0 00-5-5z" />
                  <path d="M9.5 18a2.5 2.5 0 005 0" />
                </svg>
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="8" r="3.5" />
                  <path d="M4 20c0-3.4 3.6-6 8-6s8 2.6 8 6" />
                </svg>
              </div>
            </div>
          </div>

          <div className="h-full px-[10px] pb-[118px] pt-[112px]">
            <div className="space-y-[10px]">
              <div className="flex h-8 items-center justify-between rounded-[10px] bg-primary px-2 text-[12px] font-semibold text-dark">
                <span>Таны зээлийн эрхийн мэдээлэл</span>
                <span>›</span>
              </div>

              <div className="rounded-[10px] bg-[#313234] px-[10px] py-[15px]">
                <div className="space-y-[15px]">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-[15px] bg-dark">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <rect x="3" y="6" width="18" height="12" rx="2" />
                        <path d="M15 12h3" />
                        <path d="M7 10h5" />
                      </svg>
                    </div>
                  </div>

                  <div className="flex items-end justify-between gap-3">
                    <div className="flex-1">
                      <p className="mb-[5px] text-[12px] font-semibold leading-[14px] text-white">Боломжит эрх:</p>
                      <p className="text-[28px] font-semibold leading-[30px] tracking-[-0.04em] text-white">1,000,000₮</p>
                    </div>
                    <button className="flex h-8 items-center gap-1 rounded-[10px] bg-primary px-2 text-[12px] font-semibold text-dark">
                      <span>Гэрээ байгуулах</span>
                      <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 4l6 6-6 6" />
                      </svg>
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-[10px] leading-3 text-white">
                    <div className="flex items-center gap-1">
                      <span className="text-white/80">Нийт эрх:</span>
                      <span>1,000,000₮</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-white/80">Ашигласан эрх:</span>
                      <span>0₮</span>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="pt-1 text-[16px] font-semibold leading-[19px] text-white">Идэвхитэй зээл</h3>

              <p className="text-[12px] font-semibold leading-[14px] text-white">
                Таны зээлийн гэрээ энд харагдана. Шинээр зээл авсан тохиолдолд жагсаалт автоматаар шинэчлэгдэнэ.
              </p>

              <div className="flex gap-[5px] text-[12px] font-semibold leading-[14px]">
                <button className="h-[34px] rounded-[10px] bg-primary px-[10px] text-dark">Бүгд</button>
                <button className="h-[34px] rounded-[10px] bg-[#313234] px-[10px] text-[#A1A1A1]">Хэвийн</button>
                <button className="h-[34px] rounded-[10px] bg-[#313234] px-[10px] text-[#A1A1A1]">Дөхсөн</button>
                <button className="h-[34px] rounded-[10px] bg-[#313234] px-[10px] text-[#A1A1A1]">Хэтэрсэн</button>
              </div>

              <div className="flex h-[95px] items-center justify-center rounded-[10px] bg-[#313234] p-[10px] text-center text-[12px] font-semibold leading-[14px] text-[#A1A1A1]">
                Авсан зээл байхгүй байна
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 z-20 h-[118px] bg-dark px-[10px] pb-[45px] pt-[10px] shadow-[0_-2px_30px_rgba(0,0,0,0.1)]">
            <div className="flex h-[63px] items-center justify-between gap-2">
              <button className="flex h-full flex-1 flex-col items-center justify-center gap-[5px] rounded-[20px] text-[#313234]">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 10.5L12 3l9 7.5" />
                  <path d="M5 9.5V20h14V9.5" />
                </svg>
                <span className="text-[12px] font-semibold">Нүүр</span>
              </button>

              <button className="flex h-full flex-1 flex-col items-center justify-center gap-[5px] rounded-[20px] bg-[#313234] text-white">
                <img src="/white_cashly.png" alt="Cashly Logo" className="h-[20px] w-[63px] object-contain rounded-[5px]" />
                <span className="text-[12px] font-semibold">Зээл</span>
              </button>

              <button className="flex h-full flex-1 flex-col items-center justify-center gap-[5px] rounded-[20px] text-[#313234]">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 3l2.6 5.2 5.8.9-4.2 4.1 1 5.8L12 16.3 6.8 19l1-5.8L3.6 9.1l5.8-.9L12 3z" />
                </svg>
                <span className="text-[12px] font-semibold">Loyalty</span>
              </button>
            </div>
            <div className="mx-auto mt-[10px] h-[5px] w-[134px] rounded-[10px] bg-white" />
          </div>
        </div>
      </div>
    </div>
  )
}

