# frozen_string_literal: true

require 'spec_helper'

describe 'page [/]', type: :feature do
  LOCALES.each do |lang, data|
    context "#{lang}" do
      describe 'h3' do
        before do
          visit data[:path]
          render_lazy_contents
        end

        context 'CardsFeatured' do
          it 'has cardTab' do
            expect(find('.v-tabs a#cardTab-0.v-tab--active').text).to eq t(lang, '注目の指標').upcase
          end

          it 'has h3' do
            expect(find('.DataCard.ConfirmedCasesDetailsCard > div > div > div.DataView-Header > h3').text).to eq t(lang, '検査陽性者の状況')
            expect(find('.DataCard.MonitoringItemsOverviewCard > div > div > div.DataView-Header > h3').text).to eq t(lang, 'モニタリング項目')
            expect(find('.DataCard.VaccinationCard > div > div > div.DataView-Header > h3').text).to eq t(lang, 'ワクチン接種数（累計）')
            expect(find('.DataCard.ConfirmedCasesNumberCard > div > div > div.DataView-Header > h3').text).to eq t(lang, '報告日別による陽性者数の推移')
          end
        end
      end
    end
  end
end
