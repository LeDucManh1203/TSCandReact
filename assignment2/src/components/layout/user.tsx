import { Outlet } from 'react-router-dom'

const UserLayout = () => {
    return <>
        {/* Header */}
        <header className='bg-red-500 h-[61px]'>
            <div className="container mx-auto flex items-center gap-4">
                <img className='w-[70px]' src="/logo.png" alt="" />
                <input className='grow' type="text" placeholder='Tìm kiếm' />
            </div>
        </header>

        {/* Content */}
        <Outlet />
        <footer>
            <div className="container mx-auto flex items-center gap-20 my-20">
                <div className="flex flex-col leading-7">
                    <a href='#'>Tìm cửa hàng</a>
                    <a href='#'>Tìm cửa hàng gần nhất</a>
                    <a href='#'>Mua hàng từ xa</a>
                    <a href='#' className='text-red-500'>Gặp trực tiếp cửa hàng gần nhất (Zalo hoặc gọi điện)</a>
                    <a href='#'>Phương thức thanh toán</a>
                </div>
                <div className="flex flex-col leading-7">
                    <a href='#'>Gọi mua hàng: 1800.2044 (8h00 - 22h00)</a>
                    <a href='#'>Gọi khiếu nại: 1800.1242 (8h00 - 22h00)</a>
                    <a href='#'>Gọi bảo hành: 1800.1277 (8h00 - 22h00)</a>
                    <a href='#'>Đối tác dịch vụ bảo hành</a>
                    <a href='#'>Mua hàngĐiện Thoại - Máy tính</a>
                    <a href='#' className='text-2xl'>Trung tâm bảo hành uỷ quyền Apple</a>
                    <a href="#"><img src="/dienthoaivui.png" alt="" /></a>
                </div>
                <div className="flex flex-col leading-7">
                    <a href='#'>Mua hàng và thanh toán Online</a>
                    <a href='#'>Mua hàng trả góp Online</a>
                    <a href='#'>Tra điểm Smember</a>
                    <a href='#'>Tra thông tin bảo hành</a>
                    <a href='#'>Tra cứu hoá đơn VAT điện tử</a>
                    <a href='#'>Trung tâm bảo hành chính hãng</a>
                    <a href='#'>Quy định về việc sao lưu dữ liệu</a>
                    <a href='#' className='text-red-500'>Dịch vụ bảo hành điện thoại</a>
                </div>
                <div className="flex flex-col leading-7">
                    <a href='#'>Quy chế hoạt động</a>
                    <a href='#'>Chính sách Bảo hành</a>
                    <a href='#'>Liên hệ hợp tác kinh doanh</a>
                    <a href='#'>Khách hàng doanh nghiệp (B2B)</a>
                    <a href='#' className='text-red-500'>Ưu đãi thanh toán</a>
                    <a href='#'>Tuyển dụng</a>
                </div>

            </div>
            <div className='bg-[#F8F8F8]  mx-auto flex items-center gap-20  '>
                <div className="flex flex-col p-10 leading-8 ">
                    <a href='#'>Điện thoại iPhone 13 - Điện thoại iPhone 12 - Điện thoại iPhone 11</a>
                    <a href='#'>Điện thoại iPhone 13 Pro MAx- Điện thoại iPhone 12 - Điện thoại iPhone 11</a>
                    <a href='#'>iPhone cũ giá rẻ - iPhone 12 cũ - iPhone 11 cũ</a>
                </div>
                <div className="flex flex-col leading-8">
                    <a href='#'>Điện thoại iPhone - Điện thoại Samsung - Điện thoại Samsung A</a>
                    <a href='#'>Điện thoại OPPO- Điện thoại Xiaomi - Điện thoại Vivo</a>
                    <a href='#'>Samsung Fold 3 - Samsung S22 - Samsung A73</a>
                </div>
                <div className="flex flex-col leading-8">
                    <a href='#'>Laptop HP - Laptop - Laptop Dell</a>
                    <a href='#'>Microsoft Surface - Laptop Lenovo - Laptop Asus</a>
                    <a href='#'>Máy tính để bàn - Màn hình máy tính - Camera</a>
                </div>
            </div>
            <div className='bg-[#F8F8F8] text-sm text-center' >
                <p>Công ty TNHH Thương mại và dịch vụ kỹ thuật DIỆU PHÚC - GPĐKKD: 0316172372 do sở KH & ĐT TP. HCM cấp ngày 02/03/2020. Địa chỉ: 350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt Nam. Điện thoại: 028.7108.9666.</p>
            </div>
        </footer>
    </>
}

export default UserLayout