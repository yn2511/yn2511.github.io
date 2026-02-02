import React from "react";
import {
  FileCheck,
  AlertCircle,
  Lightbulb,
} from "lucide-react";
import { ManualSection } from "./components/ManualSection";
import screenshot1 from "figma:asset/6d83f0f3df918859dcd477c0eba9e126f8bf516a.png";
import screenshot2 from "figma:asset/86717cf1d8f4b2aa95efb4b4378180c099182587.png";
import screenshot1b from "figma:asset/f6a5a50546afd3b863e6c7c55f191836ae5ee4e4.png";
import screenshot3 from "figma:asset/9a3dd9ff0d5f9e5b9c5a26e6a6970c95859f8656.png";
import screenshot4 from "figma:asset/9c3ea5c6046f456a2fcfa89d9790bd01ccdcb788.png";
import screenshot5 from "figma:asset/2bb20c8c1f93c06bc837e2e0c52655f41921507b.png";
import imgMatchingResult from "./assets/matching-result.png";
import imgUnregistered from "./assets/unregistered.png";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <FileCheck className="w-10 h-10 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">
              알맹상점 매칭 자동화 도구 사용 가이드
            </h1>
          </div>
          <p className="text-gray-700 leading-relaxed">
            이 엑셀 파일은 <strong>[응답 데이터]</strong>와{" "}
            <strong>[가입자 명단]</strong>을 대조하여 자동으로 가입자 ID를 매칭해주는 도구입니다.
            <br />
            아래 순서대로 진행해 주세요!
          </p>
        </div>

        <ManualSection number="1" title="매크로 활성화 (최초 1회)" icon={<AlertCircle className="w-6 h-6 text-orange-600" />}>
          <p className="text-gray-700 mb-4">파일을 처음 열면 엑셀 상단에 보안 경고창이 뜰 수 있습니다.</p>
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-4">
            <p className="text-gray-800">
              <strong>[콘텐츠 사용]</strong> 또는 <strong>[매크로 포함]</strong> 버튼을 반드시 눌러주세요.
              <br />(이 버튼을 누르지 않으면 자동화 기능이 작동하지 않습니다.)
            </p>
          </div>
          <div className="rounded-lg overflow-hidden border border-gray-200">
            <img src={screenshot1} alt="매크로 활성화 화면 예시" className="w-full" />
          </div>
          <div className="rounded-lg overflow-hidden border border-gray-200 mt-4">
            <img src={screenshot1b} alt="보안 경고 팝업 화면" className="w-full" />
          </div>
        </ManualSection>

        <ManualSection number="2" title="정산 시작하기 (3단계)" icon={<FileCheck className="w-6 h-6 text-blue-600" />}>
          <div className="space-y-6">
            <div className="print-step">
              <div className="bg-blue-600 text-white inline-block px-4 py-2 rounded-md font-semibold mb-3">STEP 1. 데이터 복사하기</div>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
                <li>구글 폼이나 설문지에서 받은 응답 데이터를 전체 복사(Ctrl+C)합니다.</li>
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-4">
                  <p className="text-gray-800"><strong>타임스탬프</strong>, <strong>성함</strong>, <strong>전화번호</strong>는 반드시 포함되어야 합니다.</p>
                </div>
              </ul>
              <div className="rounded-lg overflow-hidden border border-gray-200 mt-4">
                <img src={screenshot2} alt="데이터 복사 예시" className="w-full aspect-[3/2] object-cover object-top" />
              </div>
            </div>
            <div className="print-step">
              <div className="bg-blue-600 text-white inline-block px-4 py-2 rounded-md font-semibold mb-3">STEP 2. 데이터 붙여넣기 버튼 클릭</div>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
                <li>이 엑셀 파일 상단의 <strong>[붙여넣기]</strong> 버튼을 누릅니다.</li>
                <li>마우스가 어디에 있든 상관없이 데이터가 지정된 위치(A1 셀)에 자동으로 깔끔하게 입력됩니다.</li>
              </ul>
              <div className="rounded-lg overflow-hidden border border-gray-200 mt-4">
                <img src={screenshot3} alt="붙여넣기 버튼 위치" className="w-full aspect-[3/2] object-cover object-top" />
              </div>
            </div>
            <div className="print-step">
              <div className="bg-blue-600 text-white inline-block px-4 py-2 rounded-md font-semibold mb-3">STEP 3. 정산 시작 버튼 클릭</div>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
                <li>상단의 <strong>[매칭시작]</strong> 버튼을 누릅니다.</li>
                <li>파일 선택 창이 뜨면, 대조할 <strong>가입자 명단</strong>을 선택하고 [열기]를 누릅니다.</li>
              </ul>
              <div className="rounded-lg overflow-hidden border border-gray-200 mt-4">
                <img src={screenshot4} alt="매칭시작 버튼 및 파일 선택 화면" className="w-full" />
              </div>
            </div>
          </div>
        </ManualSection>

        <ManualSection number="3" title="진행 상황 및 결과 확인" icon={<FileCheck className="w-6 h-6 text-green-600" />}>
          <ul className="list-disc list-inside text-gray-700 space-y-3 ml-4">
            <li><strong>진행률 확인:</strong> 매칭이 진행되는 동안 <strong>엑셀 화면 왼쪽 최하단(상태표시줄)</strong>을 보시면 "매칭 진행 중... 45%"처럼 실시간 진행 상황이 표시됩니다.</li>
            <li><strong>결과 확인:</strong> 완료 후에는 목적에 따라 <strong>3개의 시트</strong>에서 확인할 수 있습니다. <strong>정산메인</strong>, <strong>매칭결과</strong>, <strong>미가입자</strong> 시트가 자동 생성됩니다.</li>
          </ul>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg overflow-hidden border border-gray-200">
              <img src={screenshot5} alt="진행률 표시 및 결과 화면" className="w-full" />
              <p className="text-center text-sm text-gray-500 mt-2">기본사진</p>
            </div>
            <div className="flex flex-wrap gap-4 items-start">
              <div className="flex-1 min-w-[200px] max-w-[48%]">
                <img src={imgMatchingResult} alt="매칭결과 시트" className="w-full rounded-lg border border-gray-200" />
                <p className="text-center text-sm text-gray-500 mt-2">추가사진1</p>
              </div>
              <div className="flex-1 min-w-[200px] max-w-[48%]">
                <img src={imgUnregistered} alt="미가입자 시트" className="w-full rounded-lg border border-gray-200" />
                <p className="text-center text-sm text-gray-500 mt-2">추가사진2</p>
              </div>
            </div>
          </div>
        </ManualSection>

        <div className="print-page-break-before bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg shadow-sm p-8 border-2 border-yellow-200">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="w-7 h-7 text-yellow-600" />
            <h2 className="text-2xl font-bold text-gray-900">💡 주의사항 및 팁</h2>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3"><span className="text-yellow-600 font-bold">•</span><div><strong>지능형 교차 매칭:</strong> 이름 칸에 전화번호를 적거나 번호 칸에 이름을 적었더라도, 시스템이 자동으로 숫자 형식을 추출하여 매칭을 시도합니다.</div></li>
            <li className="flex gap-3"><span className="text-yellow-600 font-bold">•</span><div><strong>번호 형식:</strong> 010-1234-5678, 01012345678, 혹은 번호 뒤에 메모가 적혀 있어도 프로그램이 숫자만 추출하여 처리합니다.</div></li>
            <li className="flex gap-3"><span className="text-yellow-600 font-bold">•</span><div><strong>사양 낮은 PC:</strong> 데이터가 아주 많은 경우 잠시 화면이 멈춘 것처럼 보일 수 있으나, 진행률 숫자가 올라가고 있다면 정상 작동 중이니 잠시만 기다려주세요.</div></li>
          </ul>
        </div>

        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>알맹상점 매칭 자동화</p>
        </div>
      </div>
    </div>
  );
}
